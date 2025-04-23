"use client";
import Image from "next/image";
import heroBanner from "../../public/assets/images/tanya-prodaan-63g0rwti9uU-unsplash.jpg";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { GlitchyTypewriter } from "@/components/Typewriter";
import image1 from "../../public/assets/images/thom-bradley-0N5YRJgb0js-unsplash.jpg";
import image2 from "../../public/assets/images/melloo-KYM3UF3C-eg-unsplash.jpg";
import image3 from "../../public/assets/images/katt-galvan-iP1iaQqOTNw-unsplash.jpg";
import image4 from "../../public/assets/images/milin-john-_3kCOGsSjVQ-unsplash.jpg";
import { Hero } from "@/components/Hero";

// A motion div component that uses Framer Motion to animate the div with any props passed to it
const MotionDiv = (props: any) => {
  return <motion.div {...props}></motion.div>;
};

const Home = () => {
  return (
    <>
      <Header />
      <div
        className={
          "page-container w-screen px-9 md:px-0 selection:bg-amber-300 "
        }
        id="page-wrapper"
      >
        <Hero />
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-9"}>
          <div id={"col-1"}>
            <MotionDiv
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
              }}
            >
              <Image
                src={heroBanner}
                alt={"asdasd"}
                className={
                  "pt-16 h-auto md:h-[900px] object-cover object-center "
                }
              />
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div id={"col-2"}>
              <GlitchyTypewriter
                text={"Hello, World!"}
                delay={40}
                className={`text-2xl md:text-8xl pt-16 font-['Space_Grotesk']`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <p className={"pt-5 text-md leading-relaxed  md:pr-44"}>
                We believe photography transcends mere documentation; it is the
                art of seeing and capturing essence. Like artisans, we
                meticulously craft each image, focusing on the interplay of
                light, form, and texture to evoke emotion and narrative. Our
                approach blends technical mastery with a distinct artistic
                vision, seeking to reveal the inherent beauty and character
                within every subject we frame. Whether capturing the quiet soul
                of architectural spaces, the subtle atmosphere of an interior,
                or the abstract elegance found in details often overlooked, our
                process is both intuitive and considered. We explore unique
                perspectives and compositions, ensuring the final photographs
                align perfectly with the intended mood and purpose, creating
                imagery that resonates with clarity and depth.
                <br />
                <br />
                We chase the ephemeral dance of light and shadow, the fleeting
                whispers of atmosphere that paint the world anew each moment.
                The lens becomes an extension of the eye, a conduit for
                translating the silent poetry of existence into tangible form.
                Each captured frame is not merely an image, but a distilled
                memory, a fragment of time held captive in the amber of
                artistry, inviting contemplation and lingering gaze.
              </p>
            </div>
          </MotionDiv>
        </div>
        <GalleryOfImages />
      </div>
    </>
  );
};

const GalleryOfImages = () => {
  return (
    <>
      <p className={"px-[15vw] md:pl-24 text-4xl md:text-8xl py-[7vh]"}>
        We are <i>artisans</i> of photography
      </p>
      <div
        id={"flex-box-container"}
        className={
          "flex flex-col md:flex-row pb-20 px-4 md:px-[5vw] pt-9 gap-8 md:gap-0"
        }
      >
        <p className={"text-md w-full md:w-[30vw] leading-relaxed md:pr-8"}>
          We approach photography not merely as a service, but as a dedicated
          craft demanding both technical precision and profound artistic
          sensitivity. Each commission presents an opportunity to delve beneath
          the surface, to explore the narrative woven into spaces, faces, and
          fleeting moments. Like artisans of old shaping raw material, we
          meticulously sculpt with light and shadow, composition and
          perspective, seeking always to reveal unseen beauty and translate
          nuanced concepts into visually compelling statements that endure
          beyond temporary trends.
          <br />
          <br />
          Our commitment is to an image that speaks volumes, quietly yet
          powerfully. Our process thrives on collaboration and a deep immersion
          in the subject matter, whether defining the visual identity of a
          brand, capturing the essential character of an architectural design,
          or preserving the authentic intimacy of a portrait. We seek to
          understand the core vision first, then explore unique viewpoints,
          defining details, and the specific qualities of light that elevate an
          image from merely competent to truly captivating. This requires
          patience, intuition, and an unwavering dedication to quality at every
          stage, from capture through to the final, meticulously refined
          presentation. The resulting photographs are crafted to not only meet
          the brief with clarity but also to resonate with enduring authenticity
          and artistic integrity.
          <br />
          <br />
          Ultimately, our purpose extends beyond fulfilling a specific function;
          we believe the true measure of an artisan photograph lies in its
          enduring power to engage and resonate. It should serve as more than a
          record, inviting the viewer into a silent dialogue, offering layers of
          subtle meaning and aesthetic pleasure that deepen with contemplation
          and time. We dedicate ourselves to creating images that are not merely
          seen, but profoundly felt – visual statements that pause the hurried
          gaze, enrich perception long after the initial viewing, and stand as
          quiet testaments to the beauty discovered through mindful observation
          and expert execution.
        </p>

        <div
          className={
            "grid grid-cols-1  md:grid-cols-2 gap-9 w-full md:w-[calc(80%-2rem)] md:pl-8 text-2xl pb-[10vh] image-container-2nd"
          }
        >
          <Image
            src={image3}
            alt={"image3"}
            className={
              "drop-shadow-2xl md:col-start-1 md:row-start-1 md:object-contain w-full h-auto object-center"
            }
          />
          <Image
            src={image4}
            alt={"image4"}
            className={
              "drop-shadow-2xl md:col-start-2 md:object-contain md:row-start-1 w-full h-auto object-contain"
            }
          />
          <Image
            src={image1}
            alt={"image1"}
            className={
              "drop-shadow-2xl shadow-amber-800 md:object-contain md:col-start-1 w-full h-auto object-contain"
            }
          />
          <Image
            src={image2}
            alt={"image2"}
            className={
              "flex drop-shadow-2xl object-contain object-center md:object-contain md:col-start-2 w-full h-auto"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
