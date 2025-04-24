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
  const [contactForm, setContactForm] = useState<ContactDetails>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactDetails = {
    email: "adasiewicz.wyzykowski@gmail.com",
    phone: "+48 500 500 500",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            CONTACT
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3 text-neutral-300 pb-2 text-base sm:text-lg">
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
          <form action="#" method="POST" className="space-y-6">
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
                className="w-full px-4 py-2.5 bg-transparent border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
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
                className="w-full px-4 py-2.5 bg-transparent border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
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
                className="w-full px-4 py-2.5 bg-transparent border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
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
                className="w-full px-4 py-2.5 bg-transparent border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(contactForm);
                }}
                className="w-full px-6 py-3 bg-amber-400 text-black font-semibold rounded-md text-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-amber-500 transition-colors duration-200 cursor-pointer"
              >
                SEND MESSAGE
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
