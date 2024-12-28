import { Hero } from "./Hero";

type HeaderProps = {
  children: Array<React.ReactElement>;
};

export const Header = () => {
  return (
    <>
      <header
        className={
          "flex rounded-lg text-white justify-between text-xl py-8 p-9 border-4 border-t-0 border-black mb-20 bg-black"
        }
      >
        <p className={"pr-14 font-bold"}>WOO</p>
        <ol className={"flex flex-row gap-9"}>
          <li>
            <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
              Our Services
            </a>
          </li>
          <li>
            <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
              About Us
            </a>
          </li>
          <li>
            <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
              Projects
            </a>
          </li>
          <li className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
            Contact Us
          </li>
        </ol>
        <div className={"flex flex-row gap-3 pl-9"}>
          <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-150 after:ease-in-out">
            {"{Login}"}
          </a>
          <a className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:bottom-[-4px] after:duration-150 after:ease-in-out">
            {"{Sign Up}"}
          </a>
        </div>
      </header>
    </>
  );
};
