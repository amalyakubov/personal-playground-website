import "lenis/dist/lenis.css";
import { GlitchyTypewriter, spaceGrotesk } from "@/app/page";

const Hero = () => {
  return (
    <>
      <div
        className={`uppercase text-7xl font-bold leading-tighter pl-9 pb-9 ${spaceGrotesk.className}`}
      >
        <GlitchyTypewriter text={"AI-powered"} delay={50}></GlitchyTypewriter>
        <GlitchyTypewriter
          delay={50}
          className={"pl-14"}
          text={"SEO content agency"}
        ></GlitchyTypewriter>
      </div>
    </>
  );
};

export { Hero };
