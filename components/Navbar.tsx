"use client";

import { useState, useEffect } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavBarLinks } from "@/data/prjectsData";
import Icon from "./Icon";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = NavBarLinks.map(
      (link) => document.querySelector(link.href) as HTMLElement
    );

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveSection(NavBarLinks[index].link);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-4 w-full text-center z-50">
      <ul className="flex items-center justify-evenly gap-5 w-80 bg-custom-gradient shadow-lg mx-auto p-2 rounded-3xl">
        {NavBarLinks.map((link) => (
          <Link
            to={link.link}
            smooth={true}
            key={link.id}
            duration={500}
            className={`text-lg font-semibold p-3 cursor-pointer ${
              activeSection === link.link
                ? "bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full text-white"
                : "text-content hover:bg-black hover:bg-opacity-30 rounded-full"
            }`}
          >
            <Icon
              name={link.name as keyof typeof dynamicIconImports}
              className="h-[20px] md:h-[25px]"
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
