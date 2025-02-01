import { z } from 'zod';

export const validationLogin = z.object({
    email: z.string().min(1, 'Email harus diisi'),
    password: z.string().min(1, 'Password harus diisi'),
});
