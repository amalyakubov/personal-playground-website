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
            <a>Home</a>
          </li>
          <li>
            <a>Our Services</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>Contact Us</li>
        </ol>
        <div className={"flex flex-row gap-3 pl-9"}>
          <a>{"{Login}"}</a>
          <a>{"{Sign Up}"}</a>
        </div>
      </header>
      <Hero />
    </>
  );
};
