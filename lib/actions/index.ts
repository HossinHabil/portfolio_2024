"use server";

import { ContactSchema } from "@/lib/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: z.infer<typeof ContactSchema>) {
    try {
        const sendEmail = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL!,
            subject: data.subject,
            html: `
                <h2>Name : ${data.name}</h2>
                <h2>Email : ${data.email}</h2>
                <p>Subject : ${data.subject}</p>
            `
        });
        if (sendEmail.data) {
            return sendEmail.data;
        }
    } catch (error) {
        return console.error(error);
    }
}