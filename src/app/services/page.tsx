"use client";
import "@/app/globals.css";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type DropDownProps = {
  title: string;
  content: string;
};

const DropDown = ({ title, content }: DropDownProps) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
        className="text-6xl backdrop-blur relative inline-block cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="inline-block ">{title}</span>
        <span className="absolute bottom-[-8px] left-0 w-[100%] h-[5px] bg-current"></span>
      </div>
      {dropDownIsOpen ? (
        <div className="flex flex-wrap max-w-[45vw] pt-4 text-4xl cursor-text select-text pb-4">{content}</div>
      ) : null}
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col border-black border-2 border-t-0">
      {/* Wrapper for entire page */}
      <Header />
      <main className="flex-1 px-9 pt-9 backdrop-blur-md overflow-y-auto">
        {" "}
        {/* Main content */}
        <div className="relative">
          <h2 className="text-8xl backdrop-blur relative inline-block cursor-pointer hover:opacity-80 transition-opacity">
            <span className="inline-block">Hello services!</span>
            <span className="absolute bottom-[-8px] left-0 w-[100%] h-[5px] bg-current"></span>
          </h2>
          <div className="page-list-container pt-9 mt-2 text-6xl px-9 pb-9">
            <ol className="flex flex-col gap-[15px] w-max">
              <DropDown
                title="Web Development"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero diam efficitur tellus est, risus orci vitae quam. Magnis duis efficitur; amet mauris sit montes. Eu mauris sollicitudin ut urna habitant malesuada. Erat condimentum lacus, posuere lobortis mus morbi sed. Quis condimentum tellus dolor arcu cursus mauris tristique nullam interdum. Cursus egestas venenatis maximus interdum ante efficitur."
              />
              <DropDown
                title="Deployment"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique praesent dictum integer nec, tristique porta elit donec. Tempus porta adipiscing neque hac pulvinar penatibus penatibus tincidunt. Vivamus sagittis nisi metus duis semper, egestas duis nisi. Nam morbi cras condimentum bibendum ligula himenaeos. Odio ridiculus curae fames condimentum ultrices vivamus tempus sollicitudin. Habitant ipsum finibus ultrices luctus, justo etiam litora class. Etiam imperdiet fringilla massa non pretium eu praesent sem. In aliquet vel maximus efficitur integer sodales ultricies."
              />
              <DropDown
                title="UI Design"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique praesent dictum integer nec, tristique porta elit donec. Tempus porta adipiscing neque hac pulvinar penatibus penatibus tincidunt. Vivamus sagittis nisi metus duis semper, egestas duis nisi. Nam morbi cras condimentum bibendum ligula himenaeos. Odio ridiculus curae fames condimentum ultrices vivamus tempus sollicitudin. Habitant ipsum finibus ultrices luctus, justo etiam litora class. Etiam imperdiet fringilla massa non pretium eu praesent sem. In aliquet vel maximus efficitur integer sodales ultricies."
              />
            </ol>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer will now stick to bottom */}
    </div>
  );
};

export default Services;
