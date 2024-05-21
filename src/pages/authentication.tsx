import { Login } from '@/components/auth/Login';

export default function Authentication() {
  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={'hidden md:block md:w-2/3'}>
        <img
          fetchPriority={'auto'}
          src={'./images/login.svg'}
          alt={'Imagem tela autentica'}
          className={`h-screen w-full object-cover`}
        />
      </div>
      <Login />
    </div>
  );
}
