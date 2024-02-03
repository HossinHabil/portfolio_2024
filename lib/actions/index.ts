"use server";

import { ContactSchema } from "@/lib/schema";
import { z } from "zod";
import { Resend } from "resend";
import { replyTemplate } from "@/components/emailTempletes/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: z.infer<typeof ContactSchema>) {
  try {
    const sendEmail = await resend.emails.send({
      from: "mail@hossinhabil.com",
      to: process.env.CONTACT_EMAIL!,
      subject: data.subject,
      html: `
                <h1>${data.name}</h1>
                <h2>${data.email}</h2>
                <h3>${data.subject}</h3>
                <p>${data.message}</p>
                `,
    });
    if (sendEmail.data !== undefined) {
      await resend.emails.send({
        from: "mail@hossinhabil.com",
        to: data.email,
        subject: "Thank you for contacting me",
        html: replyTemplate(data.name),
      });
      return sendEmail.data;
    }
  } catch (error) {
    return console.error(error);
  }
}
