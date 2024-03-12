"use server";

import { ContactSchema } from "@/lib/schema";
import { z } from "zod";
import { Resend } from "resend";
import { replyTemplate } from "@/components/emailTempletes/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: z.infer<typeof ContactSchema>) {
  const validatedFields = ContactSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {name, email, subject, message} = validatedFields.data;
  
  try {
    const sendEmail = await resend.emails.send({
      from: "mail@hossinhabil.com",
      to: process.env.CONTACT_EMAIL!,
      subject: data.subject,
      html: `
                <h1>${name}</h1>
                <h2>${email}</h2>
                <h3>${subject}</h3>
                <p>${message}</p>
                `,
    });
    if (sendEmail.data !== undefined) {
      await resend.emails.send({
        from: "mail@hossinhabil.com",
        to: email,
        subject: "Thank you for contacting me",
        html: replyTemplate(name),
      });
      return sendEmail.data;
    }
  } catch (error) {
    return console.error(error);
  }
}
