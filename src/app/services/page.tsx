"use client";
import "@/app/globals.css";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Re-added DropDown component structure
type DropDownProps = {
  title: string;
  content: string;
};

const DropDown = ({ title, content }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    // Removed card styling, using simple div container
    <div className="border-b border-neutral-700 py-6 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        {/* Use a bolder/larger font for the title */}
        <h3 className="text-2xl md:text-3xl font-semibold hover:text-amber-400 transition-colors">
          {title}
        </h3>
        {/* Simple +/- indicator */}
        <span className="text-3xl text-neutral-500 transform transition-trans form duration-200 cursor-pointer">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {/* Content revealed below */}
      {
        <div
          // Use grid for smoother height animation
          className="grid text-neutral-300 text-lg leading-relaxed pr-8 overflow-hidden"
          style={{
            // Animate grid-template-rows instead of max-height
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition: "grid-template-rows 0.15s ease-in-out", // Smoother easing and slightly longer duration
          }}
        >
          {/* Wrap content in an inner div to prevent margin collapse issues */}
          <div className="overflow-hidden pt-4">{content}</div>
        </div>
      }
    </div>
  );
};

const Services = () => {
  // Using the photography-specific services data
  const services = [
    {
      title: "Portrait Photography",
      content:
        "Capturing stunning individual, couple, or family portraits that tell your unique story. We create timeless images in studio or on location, focusing on authentic moments and beautiful light.",
    },
    {
      title: "Event Coverage",
      content:
        "Documenting your special events, from weddings and parties to corporate functions and conferences. We blend into the background to capture candid moments and key highlights professionally.",
    },
    {
      title: "Commercial & Product",
      content:
        "Creating high-impact imagery for your brand. We specialize in product photography, lifestyle shots, and commercial campaigns that elevate your marketing and connect with your audience.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] md:px-8 md:py-16">
        <main className="flex-1 px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Services
              </h1>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <DropDown
                  key={service.title}
                  title={service.title}
                  content={service.content}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
