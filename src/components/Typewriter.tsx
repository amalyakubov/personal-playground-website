import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type GlitchyTypewriterProps = {
  text: string;
  delay: number;
  [key: string]: unknown;
};

const getRandomLetter = (): string => {
  const charCode = Math.floor(Math.random() * 94) + 33; // ASCII A-Z
  return String.fromCharCode(charCode);
};

const gargledText = (text: string): string => {
  if (text.length === 0) return "";
  if (text.length === 1) return getRandomLetter();

  // Extract the last character
  const lastChar: string = text[text.length - 1];

  // Transform all characters except the last one
  const transformedText = text
    .slice(0, -1)
    .split("")
    .map(() => getRandomLetter())
    .join("");

  // Append the last character
  return `${transformedText}${lastChar}`;
};
const Typewriter = ({
  text,
  delay,
  ...props
}: {
  text: string;
  delay: number;
}) => {
  const [textToDisplayObject, setTextToDisplayOBject] = useState({
    text: "",
    index: 0,
  });
  useEffect(() => {
    if (textToDisplayObject.index < text.length) {
      const timeout = setTimeout(() => {
        setTextToDisplayOBject((prev) => ({
          text: prev.text + text[prev.index],
          index: prev.index + 1,
        }));
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [textToDisplayObject, delay]);
  return (
    <motion.p className={"typewriter"} {...props}>
      {textToDisplayObject.text}
    </motion.p>
  );
};

const GlitchyTypewriter: React.FC<GlitchyTypewriterProps> = ({
  text,
  delay,
  ...props
}) => {
  const [textToDisplayObject, setTextToDisplayOBject] = useState({
    text: "",
    index: 0,
  });

  useEffect(() => {
    if (textToDisplayObject.index < text.length) {
      const timeout = setTimeout(() => {
        const nextIndex = textToDisplayObject.index + 1;
        const substring = text.slice(0, nextIndex);
        const transformed = gargledText(substring);
        setTextToDisplayOBject((prev) => ({
          index: nextIndex,
          text: transformed,
        }));
      }, delay);

      return () => clearTimeout(timeout);
    }
    if (textToDisplayObject.index === text.length) {
      let resultingText = textToDisplayObject.text.split("");
      for (let i = 0; i < textToDisplayObject.text.length; i++) {
        setTimeout(() => {
          resultingText[i] = text.split("")[i];
          console.log(text);
          console.log("resulting Text", resultingText);
          setTextToDisplayOBject((prev) => ({
            ...prev,
            text: resultingText.join(""),
          }));
        }, i * 30); // Change the factor by which i is multiplied to change the speed of the typewriter
      }
    }
  }, [textToDisplayObject.index, text, delay]);

  return (
    <motion.p className="typewriter" {...props}>
      {textToDisplayObject.text}
    </motion.p>
  );
};

export { Typewriter, GlitchyTypewriter };
