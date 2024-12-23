import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger-icon.svg";
import close from "../assets/close.svg";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navbarRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const navbar = entries[0]?.target;
      if (navbar == null) return;
      setShowMobileMenu(false);
    });

    observer.observe(navbarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="bg-primary w-full">
        <div className="max-w-screen-2xl py-[26px] mx-auto xl:px-20 md:px-10 px-5">
          <div className="w-full flex items-center gap-4 justify-between">
            <div className="shrink-0">
              <a href="/">
                <img src={logo} alt="logo" className="h-9 -mt-[11px]" />
              </a>
            </div>
            <ul className="items-center gap-7 hidden md:flex">
              <li>
                <a
                  href="#"
                  className="uppercase text-white text-sm font-medium tracking-wider"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase text-white text-sm font-medium tracking-wider"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase text-white text-sm font-medium tracking-wider"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase text-white text-sm font-medium tracking-wider"
                >
                  Career
                </a>
              </li>
            </ul>
            <div className="shrink-0 md:hidden text-[0px]">
              <button type="button" onClick={() => setShowMobileMenu(true)}>
                <img src={hamburger} role="presentation" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      <aside
        className={`bg-white z-10 py-4 px-5 fixed h-screen md:hidden w-full top-0 transform transition-transform duration-300 ease-in ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="absolute top-4 right-5">
          <button type="button" onClick={() => setShowMobileMenu(false)}>
            <img src={close} role="presentation" />
          </button>
        </div>

        {/* nav links */}
        <ul className="space-y-8">
          <li>
            <a
              href="/"
              className="uppercase text-black py-1.5 block text-sm font-medium tracking-wider"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-black py-1.5 block text-sm font-medium tracking-wider"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-black py-1.5 block text-sm font-medium tracking-wider"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-black py-1.5 block text-sm font-medium tracking-wider"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-black py-1.5 block text-sm font-medium tracking-wider"
            >
              Career
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};
