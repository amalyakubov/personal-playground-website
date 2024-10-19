import { Hero } from "./Hero";

type HeaderProps = {
  children: Array<React.ReactElement>;
};

export const Header = () => {
  return (
    <>
      <header className={"flex px-14 justify-between text-xl pt-4 p-9"}>
        <p className={"pr-14"}>WOO</p>
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
