import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(2).max(15).regex(/^[a-zA-Z '.-]*$/, "Must be only characters"),
    email: z.string().email(),
    subject: z.string().min(2).max(50),
    message: z.string().min(2).max(500),
});