'use server';

import { validateEnv } from '@/utils/env';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const env = validateEnv();

const transporter = nodemailer.createTransport({
    host: env.SMTP_SERVER_HOST,
    secure: true,
    port: env.SMTP_SERVER_PORT,
    auth: {
        user: env.SMTP_SERVER_USERNAME,
        pass: env.SMTP_SERVER_PASSWORD,
    },
} as SMTPTransport.Options);

export async function sendMail({
    //email,
    sendTo,
    subject,
    text,
    html,
}: {
    //email: string;
    sendTo?: string;
    subject: string;
    text: string;
    html?: string;
}) {
    try {
        await transporter.verify();  // Check the connection configuration
    } catch (error) {
        console.log('Something Went Wrong', env.SMTP_SERVER_USERNAME, error);
        return;
    }
    const info = await transporter.sendMail({
        from: env.SMTP_SERVER_USERNAME,
        to: sendTo || env.SITE_MAIL_RECIEVER,
        subject: subject,
        text: text,
        html: html ? html : '',
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', env.SITE_MAIL_RECIEVER);
    return info;
}