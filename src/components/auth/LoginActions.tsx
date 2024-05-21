import Image from 'next/image';
import { useAuth } from '@/data/hook/useAuth';

interface ILoginActionsProps {
  submit: any;
  mode: string;
}

export const LoginActions = ({ submit, mode }: ILoginActionsProps) => {
  const { loginGoogle } = useAuth();

  return (
    <div>
      <button
        onClick={(event) => {
          event.preventDefault();
          submit();
        }}
        className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-3 mt-6`}
      >
        {mode === 'login' ? 'Entrar' : 'Cadastrar'}
      </button>
      <hr className={`my-6 border-gray-300 w-full`} />

      <button
        onClick={async (event) => {
          event.preventDefault();
          await loginGoogle();
        }}
        className={`flex justify-center items-center w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 mt-6 `}
      >
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full bg-white mr-2`}
        >
          <Image
            fetchPriority={'auto'}
            src={'/images/google.svg'}
            alt={'logo google'}
            width={22}
            height={22}
          />
        </div>
        Entrar com o Google
      </button>
    </div>
  );
};
