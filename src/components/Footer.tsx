import { useContext } from "react";
import whiteLogo from "../../public/assets/icons/github-mark-white.png";
import blackLogo from "../../public/assets/icons/github-mark.png";
import { ThemeContext } from "@/app/page";

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  const { theme, setTheme } = themeContext;
  return (
    <div className={"h-[20vh] pt-20 pb-9 dark:bg-white dark:text-black px-9 rounded-md backdrop-blur-md flex flex-row"}>
      <div className={"footer-menu w-max pr-9"}>
        <ol className={"flex pt-4"}>
          <li className={"text-4xl"}>Socials</li>
        </ol>
      </div>
      <div className={"w-max"}>
        <a href="https://github.com/amalyakubov">
          <img src={theme === "dark" ? blackLogo.src : whiteLogo.src} width={70} height={70} className="pb-4" />
          <p>@amalyakubov</p>
        </a>
      </div>
    </div>
  );
};

export { Footer };
