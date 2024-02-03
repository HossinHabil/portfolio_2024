"use server";

import { ContactSchema } from "@/lib/schema";
import { z } from "zod";

export async function sendContactEmail(data: z.infer<typeof ContactSchema>) {
    const validateFields = ContactSchema.safeParse(data);

    if (!validateFields.success) {
        return validateFields.error;
    }

    if (validateFields.success) {
        return "success";
    }
}