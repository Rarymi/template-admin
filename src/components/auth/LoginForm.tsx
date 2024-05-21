import { AuthInput } from '@/components/auth/AuthInput';
import { UseFormRegister } from 'react-hook-form';

interface ILoginFormProps {
  register: UseFormRegister<any>;
  error: any;
}

export const LoginForm = ({ register, error }: ILoginFormProps) => {
  return (
    <div className={``}>
      <AuthInput
        label={'E-mail'}
        type={'text'}
        register={register}
        name={'email'}
        error={error.name?.message}
      />
      <AuthInput
        label={'Senha'}
        type={'password'}
        register={register}
        name={'password'}
        error={error.password?.message}
      />
    </div>
  );
};
