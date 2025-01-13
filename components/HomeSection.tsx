import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { memo } from "react";

import hero_img from "@/images/sections/hero_img.webp";
import SpotLight from "./SpotLight";

const MemoizedLinkedin = memo(Linkedin);
const MemoizedGithub = memo(Github);

const links = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hossin-habil-183866121/",
    icon: <MemoizedLinkedin />,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/HossinHabil",
    icon: <MemoizedGithub />,
  },
];

const renderLinks = () =>
  links.map((link) => (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer" // Add for security
      className="bg-black bg-opacity-20 p-3 rounded-full hover:scale-110 ease-in-out duration-150 text-content link"
      key={link.id}
      aria-label={link.name}
    >
      {link.icon}
    </a>
  ));


const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row gap-8 items-center justify-between w-full md:px-8 py-16 md:py-20 lg:pb-28"
    >
      <SpotLight />
      <div className="flex flex-col items-center text-center justify-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-content">
          Hossin Habil
        </h2>
        <p className="text-lg md:text-3xl xl:text-4xl font-medium text-content">
          Front End Web Developer
        </p>
        <div className="flex items-center gap-5">
          {renderLinks()}
        </div>
      </div>
      <Image
        priority
        src={hero_img}
        alt="Home Image"
        className="w-[350px] md:w-[450px] rounded-full"
        sizes="(max-width: 768px) 350px, 450px"
        placeholder="blur"
        id="hero_img"
      />
    </section>
  );
};

export default HomeSection;
