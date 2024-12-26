"use client";
import Image from "next/image";
import heroBanner from "../../public/assets/images/tanya-prodaan-63g0rwti9uU-unsplash.jpg";
import { Header } from "@/components/Header";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { DropdownMenu } from "@/components/DropdownMenu";

import image1 from "../../public/assets/images/thom-bradley-0N5YRJgb0js-unsplash.jpg";
import image2 from "../../public/assets/images/melloo-KYM3UF3C-eg-unsplash.jpg";
import image3 from "../../public/assets/images/katt-galvan-iP1iaQqOTNw-unsplash.jpg";
import image4 from "../../public/assets/images/milin-john-_3kCOGsSjVQ-unsplash.jpg";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Typewriter = ({ text, delay, ...props }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentText, delay]);
  return (
    <motion.p className={"typewriter"} {...props}>
      {currentText}
    </motion.p>
  );
};

// Function to generate a random uppercase letter
const getRandomLetter = (): string => {
  const charCode = Math.floor(Math.random() * 94) + 33; // ASCII A-Z
  return String.fromCharCode(charCode);
};

const gargledText = (text: string): string => {
  if (text.length === 0) return "";
  if (text.length === 1) return getRandomLetter();

  // Extract the last character
  const lastChar = text[text.length - 1];

  // Transform all characters except the last one
  const transformedText = text
    .slice(0, -1)
    .split("")
    .map(() => getRandomLetter())
    .join("");

  // Append the last character
  return transformedText + lastChar;
};

const MotionDiv = (props: any) => {
  return <motion.div {...props}></motion.div>;
};

type GlitchyTypewriterProps = {
  text: string;
  delay: number;
  [key: string]: unknown;
};

const GlitchyTypewriter: React.FC<GlitchyTypewriterProps> = ({ text, delay, ...props }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        const nextIndex = currentIndex + 1;
        const substring = text.slice(0, nextIndex);
        const transformed = gargledText(substring);
        setCurrentText(transformed);
        setCurrentIndex(nextIndex);
      }, delay);

      return () => clearTimeout(timeout);
    }
    if (currentIndex === text.length) {
      let resultingText = currentText.split("");
      for (let i = 0; i < currentIndex; i++) {
        setTimeout(() => {
          resultingText[i] = text.split("")[i];
          console.log(text);
          console.log("resulting Text", resultingText);
          setCurrentText(resultingText.join(""));
        }, i * 60);
      }
    }
  }, [currentIndex, text, delay]);

  return (
    <motion.p className="typewriter" {...props}>
      {currentText}
    </motion.p>
  );
};
const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={"page-container px-14  w-screen h-screen selection:bg-amber-300 "}>
      <Header />
      <div className={"grid grid-cols-2 w-screen gap-9 "}>
        <div id={"col-1"}>
          <MotionDiv
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <Image src={heroBanner} alt={"asdasd"} className={"pt-16 size-12/12"} />
          </MotionDiv>
        </div>
        <MotionDiv
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          clas
        >
          <div className="text-container">
            <div id={"col-2"}>
              <GlitchyTypewriter
                text={"Hello, World!"}
                delay={80}
                className={`text-8xl pt-16 px-9 pl-12 ${spaceGrotesk.className}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <p className={"pt-5 text-2xl leading-relaxed  pr-44 px-14"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet enim eget magna pretium
                tristique. In tincidunt mi nec enim gravida, ut dictum arcu tincidunt. Praesent eget pretium massa, et
                laoreet sem. Aliquam blandit imperdiet erat in finibus. Quisque iaculis libero nisl, elementum varius
                lectus finibus vitae. Mauris nec ligula mollis, pharetra tellus sed, ornare purus. Nam quis ex vitae
                nisi suscipit dictum et et lectus. Donec a tincidunt felis. Integer at pulvinar dolor. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tristique,
                diam id feugiat vestibulum, risus nisl maximus est, vel tincidunt risus ligula eget urna. Vivamus
                maximus, felis sed tincidunt lobortis, velit purus congue arcu, sit amet faucibus urna massa et odio.{" "}
                <br />
                <br />
                Integer eget elit elit. Nullam sed tellus nisl. Nullam vel ornare dolor. Fusce eu pharetra metus. Etiam
                vitae lorem elit. Aliquam nec consequat leo. Quisque ultricies leo a ipsum accumsan tempus. Nam non
                bibendum ante. Integer sit amet tincidunt metus. Praesent dignissim, enim eu euismod tincidunt, elit
                lacus rutrum libero, sit amet tincidunt ante nulla a felis. Vestibulum hendrerit urna lorem, nec aliquam
                dolor porta ut. Phasellus rutrum nisl eu libero tincidunt, id eleifend massa feugiat. In eu purus dictum
                nisi tincidunt laoreet nec vitae turpis. Mauris eu fringilla lectus, at feugiat mi. Praesent aliquam
                maximus libero, fringilla suscipit mauris cursus eu. Nulla tortor augue, rutrum condimentum tortor
                vitae, pellentesque congue risus. Cras ac arcu id lacus luctus ultrices. Curabitur ut sollicitudin
                risus.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
      <GalleryOfImages />
    </div>
  );
};

const GalleryOfImages = () => {
  return (
    <>
      <p className={"pl-20 text-8xl pb-16 pt-[5vh]"}>
        We are <i>artisans</i> of fotography
      </p>
      <div id={"flex-box-container"} className={"flex flex-row  "}>
        <p className={"text-2xl w-[30vw] leading-relaxed"}>
          We set sail on this new sea because there is new knowledge to be gained, and new rights to be won, and they
          must be won and used for the progress of all people. For space science, like nuclear science and all
          technology, has no conscience of its own. Whether it will become a force for good or ill depends on man, and
          only if the United States occupies a position of pre-eminence can we help decide whether this new ocean will
          be a sea of peace or a new terrifying theater of war. I do not say that we should or will go unprotected
          against the hostile misuse of space any more than we go unprotected against the hostile use of land or sea,
          but I do say that space can be explored and mastered without feeding the fires of war, without repeating the
          mistakes that man has made in extending his writ around this globe of ours. There is no strife, no prejudice,
          no national conflict in outer space as yet. Its hazards are hostile to us all. <br />
          <br />
          Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation may never come
          again. But why, some say, the Moon? Why choose this as our goal? And they may well ask, why climb the highest
          mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas? We choose to go to the Moon. We
          choose to go to the Moon... We choose to go to the Moon in this decade and do the other things, not because
          they are easy, but because they are hard; because that goal will serve to organize and measure the best of our
          energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
          postpone, and one we intend to win, and the others, too.
        </p>

        <div className={"grid grid-cols-2 gap-5 pl-20  pr-20 text-2xl w-[80%]  "}>
          <Image src={image1} alt={"image1"} className={"drop-shadow-2xl shadow-amber-800 col-start-1"} />
          <Image
            src={image2}
            alt={"image2"}
            className={"flex col-start-2 drop-shadow-2xl object-cover object-center h-full"}
          />
          <Image src={image3} alt={"image3"} className={"col-start-1 drop-shadow-2xl row-start-1 "} />
          <Image
            src={image4}
            alt={"image4"}
            className={"col-start-2 row-start-1 drop-shadow-2xl h-full object-cover object-center "}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Emoji = (props: { label?: string; symbol: string }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};

export default Home;
export { Typewriter, GlitchyTypewriter, spaceGrotesk };
