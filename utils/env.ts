import { z } from "zod";

const envSchema = z.object({
    SMTP_SERVER_HOST: z.string(),
    SMTP_SERVER_PORT: z.coerce.number(),
    SMTP_SERVER_USERNAME: z.string().email(),
    SMTP_SERVER_PASSWORD: z.string(),
    SITE_MAIL_RECIEVER: z.string().email(),
});

export const validateEnv = () => {
    const result = envSchema.safeParse(process.env);

    if (!result.success) {
        console.log('Invalid environment variables:', result.error.format());
        process.exit(1);
    }

    return result.data;
};
