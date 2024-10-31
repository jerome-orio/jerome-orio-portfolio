'use server';
import { sendEmail } from "@/lib/send-email";
import { formSchema } from "./types";

export async function submitForm(formData: { message: string; name: string; email: string; }) {
    try {
        const result = formSchema.safeParse(formData);

        if (result.success === true) {
            const name = formData.name;
            const email = formData.email;
            const message = formData.message;
            const mailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const response = await sendEmail({
                //email: values.email,
                subject: 'New Contact Us Form',
                text: mailText,
            });
            if (response?.messageId) {
                return { message: 'success' }
            }
        }
        return { message: 'failed' }
    } catch (e) {
        console.error('Error while trying to send email :', e);
        return { message: 'failed' }
    }
}