import * as z from 'zod'

export const LoginFormSchema = z.object ({

    email: z.string().email('Digite um email válido'),
    password: z.string().min(4, 'A Senha deve ter no mínimo 4 caracteres')

})