import { UseFormRegister } from 'react-hook-form';

interface IAuthInput {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  error: any;
}

export const AuthInput = ({
  label,
  type,
  name,
  register,
  error,
}: IAuthInput) => {
  console.log({ error });
  return (
    <div className={`flex flex-col mt-4`}>
      <label>{label}</label>

      <input
        {...register(`${name}`, { required: true })}
        type={type}
        className={`px-4 py-3 rounded-lg bg-gray-100 mt-2 border 
        focus:border-blue-500 focus:outline-none focus:bg-white`}
      />
      {error && <span className="text-red-500 text-xs pt-1">{error}</span>}
    </div>
  );
};
