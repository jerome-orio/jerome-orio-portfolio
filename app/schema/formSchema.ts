import { z } from "zod";

// Captcha schema for forms that require CAPTCHA
export const captchaSchema = z.object({
    captcha: z.string().min(1, { message: 'Please enter the CAPTCHA text' }),
    captchaToken: z.string(),
    captchaRefresh: z.number().optional(),
});

// Contact form schema extending the Captcha schema
export const contactFormSchema = captchaSchema.merge(z.object({
    name: z.string().trim().min(1, { message: 'Name is required' }).max(200),
    email: z.string().trim().email().min(1, { message: 'Email is required' }).max(200),
    message: z.string().trim().min(10, { message: 'Message must contain at least 10 characters' }).max(5000),
})).refine((data) => data.captcha.toUpperCase() === data.captchaToken.toUpperCase(), {
    message: "Incorrect CAPTCHA text",
    path: ["captcha"]
});

