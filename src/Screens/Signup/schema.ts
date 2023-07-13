import * as z from 'zod';

// Definição do esquema de validação para o formulário de login

export const LoginFormSchema = z.object({
  email: z.string().email('Digite um email válido'), // Validação de email
  nome: z.string().min(4), // Validação de comprimento mínimo do nome
  telefone: z.string().regex(/^\(\d{2}\)\s?\d{9}$/, 'Telefone válido no formato (99)999999999'), // Validação de formato de telefone
  bairro: z.string().min(4, 'O bairro deve ter no mínimo 4 caracteres'), // Validação de comprimento mínimo do bairro
  rua: z.string().min(4), // Validação de comprimento mínimo da rua
  cep: z.string().regex(/^\d{5}-?\d{3}$/, 'CEP válido no formato 99999-999'), // Validação de formato de CEP
  complemento: z.string().min(10, 'O complemento deve ter no mínimo 10 caracteres'), // Validação de comprimento mínimo do complemento
});




