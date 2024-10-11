'use server';

import { sendMail } from "@/lib/send-email";

const onSubmit = async (values/* values: z.infer<typeof contactFormSchema> */) => {
    const mailText = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
        //email: values.email,
        subject: 'New Contact Us Form',
        text: mailText,
    });
    if (response?.messageId) {
        return 'success';
    } else {
        return 'failed';
    }
};

export async function SendEmail(_prevState: unknown, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const res = await onSubmit({ name, email, message });
    return {
        message: res,
    }
}