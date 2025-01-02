import { useContext } from "react";
import whiteLogo from "../../public/assets/icons/github-mark-white.png";
import blackLogo from "../../public/assets/icons/github-mark.png";
import { ThemeContext } from "@/contexts/ThemeContext";

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  const { theme, setTheme } = themeContext;
  return (
    <div
      className={`pt-12 pb-4 h-min  ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}  px-9 rounded-md backdrop-blur-md flex flex-row `}
    >
      <div className={"footer-menu w-max pr-9"}>
        <ol className={"flex pt-4"}>
          <li
            className={
              "text-3xl relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out"
            }
          >
            Socials
          </li>
        </ol>
      </div>
      <div className={"w-max"}>
        <a href="https://github.com/amalyakubov">
          <img
            src={theme === "dark" ? blackLogo.src : whiteLogo.src}
            width={70}
            height={70}
            className="pb-4 hover:-translate-y-3 transition-all"
          />
          <p className={"text-md"}>@amalyakubov</p>
        </a>
      </div>
    </div>
  );
};

export { Footer };
