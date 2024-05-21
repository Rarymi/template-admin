import { createContext, useEffect, useState } from 'react';
import { IUser } from '@/model/User';
import firebase from '../../firebase/config';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface IAuthContextProps {
  user: IUser | null;
  loginGoogle: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  handleRegister: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  logout: () => void;
}

const defaultAuthContext: IAuthContextProps = {
  user: null,
  loginGoogle: async () => {},
  login: async (email: string, password: string) => {},
  handleRegister: async (email: string, password: string) => {},
  isLoading: false,
  setIsLoading: (loading: boolean) => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContextProps>(defaultAuthContext);

const normalizedUser = async (userFirebase: firebase.User): Promise<IUser> => {
  const token = await userFirebase.getIdToken();

  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName || '',
    email: userFirebase.email || '',
    imageUrl: userFirebase.photoURL || '',
    provider: userFirebase.providerData[0]?.providerId || '',
    token,
  };
};

const manageCookies = (isLogged: boolean) => {
  if (isLogged) {
    Cookies.set('admin-template-auth', String(isLogged), {
      expires: 7,
    });
  } else {
    Cookies.remove('admin-template-auth');
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const route = useRouter();

  const [user, setUser] = useState<IUser | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const configSection = async (userFirebase: any) => {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase);
      setUser(user);
      manageCookies(true);
      setIsLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookies(false);
      setIsLoading(false);
      return false;
    }
  };

  const handleLoginGoogle = async () => {
    try {
      setIsLoading(true);
      const res = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSection(res.user as firebase.User);
      await route.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await configSection(res.user as firebase.User);
      await route.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configSection(res.user as firebase.User);
      await route.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await firebase.auth().signOut();
      await configSection(null);
      await route.push('/authentication');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSection);
      return () => cancel();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle: handleLoginGoogle,
        login: handleLogin,
        logout,
        handleRegister: handleRegister,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
