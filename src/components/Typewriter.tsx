import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export { Typewriter, GlitchyTypewriter };
