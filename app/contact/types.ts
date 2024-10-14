import { z } from "zod";

export const formSchema = z.object({
    name: z.string().trim().min(1, { message: 'Name is required' }).max(200),
    email: z.string().trim().email().min(1, { message: 'Email is required' }).max(200),
    message: z.string().trim().min(10, { message: 'Message must contain at least 10 character(s)' }).max(5000),
})

export type FormFields = z.infer<typeof formSchema>;