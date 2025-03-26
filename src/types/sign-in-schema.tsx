import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email é obrigatório" })
    .trim()
    .nonempty({ message: "Email é obrigatório" })
    .email({ message: "Email é obrigatório" }),
  password: z
    .string({ required_error: "Senha é obrigatorio" })
    .min(1, { message: "Senha é obrigatorio" }),
});

export type SignInFormData = z.infer<typeof signInSchema>;
