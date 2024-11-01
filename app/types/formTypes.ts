import { z } from "zod";
import { captchaSchema, contactFormSchema } from '../schema/formSchema';

// Exporting type inference
export type CaptchaFormFields = z.infer<typeof captchaSchema>;
export type ContactFormFields = z.infer<typeof contactFormSchema>;