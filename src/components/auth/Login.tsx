import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/schema/login.schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm } from '@/components/auth/LoginForm';
import { LoginActions } from '@/components/auth/LoginActions';
import { useAuth } from '@/data/hook/useAuth';
import { useTranslation } from 'react-i18next';

type createLoginFormData = z.infer<typeof loginSchema>;

export const Login = () => {
  const { t } = useTranslation();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { handleRegister, login } = useAuth();

  const {
    handleSubmit,
    watch,
    register,

    formState: { errors },
  } = useForm<createLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const email = watch('email');
  const password = watch('password');

  const submit = async () => {
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await handleRegister(email, password);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div className={`m-10 w-full md:w-1/3 `}>
      <form>
        <h1 className={`text-2xl  font-bold mb-5`}>
          {mode === 'login' ? 'Entre com sua conta' : 'Cadastre-se'}
        </h1>

        <div className={`w-full`}>
          <LoginForm register={register} error={errors} />
          <LoginActions submit={handleSubmit(submit)} mode={mode} />
        </div>
        {mode === 'login' ? (
          <p className={' mt-8'}>
            Novo por aqui?{' '}
            <a
              onClick={() => setMode('register')}
              className={`text-blue-500 hover:text-indigo-700 cursor-pointer font-semibold`}
            >
              Crie uma conta!
            </a>
          </p>
        ) : (
          <p className={'mt-8'}>
            Já faz parte da nossa comunidade?{' '}
            <a
              onClick={() => setMode('login')}
              className={`text-blue-500 hover:text-indigo-700 cursor-pointer font-semibold`}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </form>
    </div>
  );
};
