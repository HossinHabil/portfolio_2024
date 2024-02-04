"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "@/lib/actions";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    const res = await sendContactEmail(data);
    if (res !== undefined) {
      form.reset();
      toast.success("Message sent successfully!");
    }
  };
  return (
    <Form {...form}>
      <form
        className="space-y-4 text-center max-w-[35rem] w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="border-teal-400 placeholder:text-gray-500"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="border-teal-400 placeholder:text-gray-500"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your subject" {...field} className="border-teal-400 placeholder:text-gray-500"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  {...field}
                  rows={10}
                  cols={30}
                  className="border-teal-400 placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#67e9ff] hover:bg-[#62d7eb] transition-all dark:bg-accent dark:hover:bg-slate-700 text-white px-7 py-2 w-4/5 border-none rounded-md mx-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
