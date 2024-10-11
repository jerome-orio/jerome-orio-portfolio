'use server';

import { sendMail } from "@/lib/send-email";

/* values: z.infer<typeof contactFormSchema> */
/* const onSubmit = async (values: { name: any; email: any; message: any; } ) => {
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
}; */

export async function SendEmail(_prevState: unknown, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    //const res = await onSubmit({ name, email, message });
    const mailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const response = await sendMail({
        //email: values.email,
        subject: 'New Contact Us Form',
        text: mailText,
    });
    if (response?.messageId) {
        return { message: 'success' }
    } else {
        return { message: 'failed' }
    }
}