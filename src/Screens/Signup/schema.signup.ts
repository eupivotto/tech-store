import * as z from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('Digite um email válido'),
  name: z.string().min(4),
  contato: z.string().regex(/^\(\d{2}\)\s?\d{9}$/, 'Telefone válido no formato (99)999999999'),
  road: z.string().min(4, 'O bairro deve ter no mínimo 4 caracteres'),
  Adress: z.string().min(10),
  Zipcode: z.string().regex(/^\d{5}-?\d{3}$/, 'CEP válido no formato 99999-999'),
  password: z.string().min(4, 'A senha deve ter no mínimo 6 caracteres'),
});