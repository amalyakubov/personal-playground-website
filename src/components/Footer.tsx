import { useContext } from "react";
import whiteLogo from "../../public/assets/icons/github-mark-white.png";
import blackLogo from "../../public/assets/icons/github-mark.png";
import { ThemeContext } from "@/context/ThemeContext";
// Placeholder icons - replace with actual icons/components later
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext; // Removed setTheme as it wasn't used
  const currentYear = new Date().getFullYear();

  // Define reusable link styles
  const linkStyle = "hover:text-amber-400 transition-colors duration-200";

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20 px-[5vw] py-12 text-neutral-600 dark:text-neutral-400 text-sm backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section: Branding/Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
            Adasiewicz & Wyżykowska
          </p>
          <p>&copy; {currentYear} All Rights Reserved.</p>
        </div>

        {/* Middle Section: Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a href="/" className={linkStyle}>
            Home
          </a>
          <a href="/services" className={linkStyle}>
            Our Services
          </a>
          <a href="/contact" className={linkStyle}>
            Contact Us
          </a>
        </nav>

        {/* Right Section: Social Links */}
        <div className="flex justify-center md:justify-end gap-4 items-center">
          <a
            href="https://github.com/amalyakubov"
            aria-label="GitHub"
            className={linkStyle}
          >
            {/* Using theme-aware inline image for GitHub might be tricky with react-icons, let's use FaGithub for consistency for now */}
            <FaGithub size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className={linkStyle}>
            <FaLinkedin size={24} />
          </a>
          <a href="#" aria-label="Twitter" className={linkStyle}>
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className={linkStyle}>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
