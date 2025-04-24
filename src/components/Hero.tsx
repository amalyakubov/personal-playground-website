import "lenis/dist/lenis.css";
import { GlitchyTypewriter } from "./Typewriter";

const Hero = () => {
  return (
    <>
      <div
        className={`pt-16 uppercase text-3xl md:text-8xl font-bold leading-tighter pl-[5vw] pb-9 font-['Space_Grotesk'] md:pl-[20vw]`}
      >
        <GlitchyTypewriter text={"We are"} delay={5}></GlitchyTypewriter>
        <GlitchyTypewriter
          delay={5}
          className={"pl-14"}
          text={"Artisans of Photography"}
        ></GlitchyTypewriter>
      </div>
    </>
  );
};

export { Hero };
