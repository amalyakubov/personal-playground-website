import "lenis/dist/lenis.css";
import { GlitchyTypewriter } from "./Typewriter";

const Hero = () => {
  return (
    <>
      <div className={`pt-16 uppercase text-7xl font-bold leading-tighter pl-9 pb-9 font-['Space_Grotesk']`}>
        <GlitchyTypewriter text={"AI-powered"} delay={50}></GlitchyTypewriter>
        <GlitchyTypewriter delay={50} className={"pl-14"} text={"SEO content agency"}></GlitchyTypewriter>
      </div>
    </>
  );
};

export { Hero };
