import { createContext, useEffect, useState } from 'react';

interface IAppContext {
  theme: string;
  handleTheme?: () => void;
}

const AppContext = createContext<IAppContext>({ theme: '' });

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>('');
  const handleTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const themeSalved = localStorage.getItem('theme') ?? '';
    setTheme(themeSalved);
  }, []);

  return (
    <AppContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
