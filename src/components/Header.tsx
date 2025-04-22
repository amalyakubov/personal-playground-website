import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header
        className={
          "sticky top-0 z-50 flex items-center justify-beetwen text-xl py-6 px-9 border-b border-white/10 bg-black/70 backdrop-blur-md text-neutral-200"
        }
      >
        <Link
          href={"./"}
          className={
            "pr-14 font-bold text-2xl hover:text-white transition-colors"
          }
        >
          WOO
        </Link>
        <nav>
          <ol className={"pl-20 flex flex-row items-center gap-8 pr-9"}>
            <li>
              <Link
                className="relative pb-1 text-neutral-300 hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center after:duration-200 after:ease-in-out"
                href={"./"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="relative pb-1 text-neutral-300 hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center after:duration-200 after:ease-in-out"
                href={"/services"}
              >
                Our Services
              </Link>
            </li>
          </ol>
        </nav>
        <Link
          href={"/contact"}
          className="relative pb-1 text-neutral-300 hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center after:duration-200 after:ease-in-out"
        >
          Contact Us
        </Link>
      </header>
    </>
  );
};
