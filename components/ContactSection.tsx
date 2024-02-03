import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col lg:flex-row gap-8 items-center justify-between text-center w-full md:px-8 pt-20 pb-24">
      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-center">
          Get In Touch
        </h1>
        <p className="text-3xl md:text-4xl">Let&apos;s Talk 👋</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
