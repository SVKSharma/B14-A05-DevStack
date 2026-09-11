import { useState } from "react";
import LogoText from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#" },
  { label: "Projects", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-20">
        {/* Logo */}
        <img
          src={LogoText}
          alt="DevStack Logo"
          className="h-7 w-auto shrink-0"
        />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 font-light text-slate-600 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  i === 0
                    ? "text-pink-600"
                    : "transition-colors hover:text-pink-600"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="gap-1 hidden md:flex">
          <button className="rounded-full border-none px-5 py-2.5 font-light text-slate-700 transition-colors hover:bg-slate-50">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-6 py-2.5 text-white transition-colors hover:bg-pink-700">
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <GiHamburgerMenu
            className={`absolute h-5 w-5 text-slate-800 transition-all duration-300 ${
              isOpen
                ? "rotate-90 opacity-0 scale-75"
                : "rotate-0 opacity-100 scale-100"
            }`}
          />
          <ImCross
            className={`absolute h-4 w-4 text-slate-800 transition-all duration-300 ${
              isOpen
                ? "rotate-0 opacity-100 scale-100"
                : "-rotate-90 opacity-0 scale-75"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 font-light text-slate-600">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a href={link.href} className={i === 0 ? "text-pink-600" : ""}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <button className="flex-1 rounded-full border border-slate-200 px-5 py-2.5 font-semibold text-slate-700">
              Sign In
            </button>
            <button className="flex-1 rounded-full bg-pink-600 px-6 py-2.5 font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
