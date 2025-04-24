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
          "page-container w-screen px-4 sm:px-6 lg:px-8 selection:bg-amber-300"
        }
        id="page-wrapper"
      >
        <Hero />
        <div className="max-w-7xl mx-auto py-12 lg:py-16">
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"}>
            <div id={"col-1"}>
              <MotionDiv
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  scale: 1.03,
                }}
              >
                <Image
                  src={heroBanner}
                  alt={"Abstract architectural detail"}
                  className={
                    "w-full h-auto max-h-[700px] md:max-h-[900px] object-cover object-center rounded-lg shadow-lg"
                  }
                  priority
                />
              </MotionDiv>
            </div>
            <MotionDiv
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div id={"col-2"} className="flex flex-col justify-center h-full">
                <GlitchyTypewriter
                  text={"Crafting Vision."}
                  delay={50}
                  className={`text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-['Space_Grotesk'] mb-6`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className={"text-base sm:text-lg leading-relaxed"}>
                  We believe photography transcends mere documentation; it is
                  the art of seeing and capturing essence. Like artisans, we
                  meticulously craft each image, focusing on the interplay of
                  light, form, and texture to evoke emotion and narrative. Our
                  approach blends technical mastery with a distinct artistic
                  vision, seeking to reveal the inherent beauty and character
                  within every subject we frame. Whether capturing the quiet
                  soul of architectural spaces, the subtle atmosphere of an
                  interior, or the abstract elegance found in details often
                  overlooked, our process is both intuitive and considered. We
                  explore unique perspectives and compositions, ensuring the
                  final photographs align perfectly with the intended mood and
                  purpose, creating imagery that resonates with clarity and
                  depth.
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
        </div>
        <GalleryOfImages />
      </div>
    </>
  );
};

const GalleryOfImages = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <h2
        className={
          "text-center text-3xl sm:text-4xl lg:text-6xl mb-10 lg:mb-16"
        }
      >
        We are <i className="font-serif font-normal not-italic">artisans</i> of
        photography
      </h2>
      <div
        id={"flex-box-container"}
        className={"flex flex-col lg:flex-row items-start gap-10 lg:gap-16"}
      >
        <div className={"w-full lg:w-1/3"}>
          <p className={"text-base sm:text-lg leading-relaxed mb-6"}>
            We approach photography not merely as a service, but as a dedicated
            craft demanding both technical precision and profound artistic
            sensitivity. Each commission presents an opportunity to delve
            beneath the surface, to explore the narrative woven into spaces,
            faces, and fleeting moments. Like artisans of old shaping raw
            material, we meticulously sculpt with light and shadow, composition
            and perspective.
          </p>
          <p className={"text-base sm:text-lg leading-relaxed mb-6"}>
            Our commitment is to an image that speaks volumes, quietly yet
            powerfully. Our process thrives on collaboration and a deep
            immersion in the subject matter, whether defining the visual
            identity of a brand, capturing the essential character of an
            architectural design, or preserving the authentic intimacy of a
            portrait. We seek to understand the core vision first, then explore
            unique viewpoints, defining details, and the specific qualities of
            light that elevate an image from merely competent to truly
            captivating.
          </p>
          <p className={"text-base sm:text-lg leading-relaxed"}>
            Ultimately, our purpose extends beyond fulfilling a specific
            function; we believe the true measure of an artisan photograph lies
            in its enduring power to engage and resonate. It should serve as
            more than a record, inviting the viewer into a silent dialogue,
            offering layers of subtle meaning and aesthetic pleasure that deepen
            with contemplation and time. We dedicate ourselves to creating
            images that are not merely seen, but profoundly felt.
          </p>
        </div>

        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full lg:w-2/3"
          }
        >
          <Image
            src={image3}
            alt={"Abstract building facade"}
            className={
              "w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            }
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <Image
            src={image4}
            alt={"Minimalist interior design"}
            className={
              "w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            }
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <Image
            src={image1}
            alt={"Modern architectural lines"}
            className={
              "w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            }
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <Image
            src={image2}
            alt={"Interior detail with soft light"}
            className={
              "w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            }
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
