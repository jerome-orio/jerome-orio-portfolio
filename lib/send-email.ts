'use server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    secure: true,
    port: SMTP_SERVER_PORT,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
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
        console.error('Something Went Wrong', SMTP_SERVER_USERNAME, error);
        return;
    }
    const info = await transporter.sendMail({
        from: SMTP_SERVER_USERNAME,
        to: sendTo || SITE_MAIL_RECIEVER,
        subject: subject,
        text: text,
        html: html ? html : '',
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECIEVER);
    return info;
}