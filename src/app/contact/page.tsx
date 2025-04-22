"use client";
import "@/app/globals.css";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

type ContactDetails = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  // Example contact details - replace with actual info

  const [contactForm, setContactForm] = useState<ContactDetails>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactDetails = {
    email: "yakubovamal03@gmail.com",
    phone: "+48 xxx-xxx-xxx",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk">
            CONTACT
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3 text-neutral-300 mb-12 text-lg">
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-2 border-b border-transparent hover:border-neutral-300 transition-colors"
            >
              <HiOutlineMail className="w-5 h-5" />
              {contactDetails.email}
            </a>
            <span className="hidden sm:inline text-neutral-500">//</span>
            <a
              href={`tel:${contactDetails.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 border-b border-transparent hover:border-neutral-300 transition-colors"
            >
              <HiOutlinePhone className="w-5 h-5" />
              {contactDetails.phone}
            </a>
          </div>
        </div>

        <div className="w-full max-w-lg">
          <form
            action="#" // Replace with your form handling endpoint or service
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => {
                  setContactForm({
                    ...contactForm,
                    name: e.target.value,
                  });
                }}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-hidden focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => {
                  setContactForm({
                    ...contactForm,
                    email: e.target.value,
                  });
                }}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-hidden focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Optional"
                onChange={(e) => {
                  setContactForm({
                    ...contactForm,
                    subject: e.target.value,
                  });
                }}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-600 focus:outline-hidden focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                onChange={(e) => {
                  setContactForm({
                    ...contactForm,
                    message: e.target.value,
                  });
                }}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-hidden focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(contactForm);
                }}
                className="w-full px-6 py-3 bg-amber-400 text-black font-semibold text-lg hover:text-black focus:outline-hidden hover:shadow-[10px_10px_0px_rgba(255,255,255,1)] transition-all duration-200"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
