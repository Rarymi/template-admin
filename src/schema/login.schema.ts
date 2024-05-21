import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ message: 'Email é obrigatório' })
    .email({ message: 'Email é obrigatório' })
    .min(8, { message: 'Email é obrigatório' }),
  password: z
    .string({ message: 'Senha é obrigatório' })
    .min(6, { message: 'Senha é obrigatório' }),
});
