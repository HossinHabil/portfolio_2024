import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

import hero_img from "@/images/sections/hero_img.webp";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row gap-8 items-center justify-between w-full md:px-8 py-16 md:py-20 lg:pb-28"
    >
      <div
        className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 60.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-content">
          Hossin Habil
        </h2>
        <p
          className="text-lg md:text-3xl xl:text-4xl font-medium text-content"
          id="occupation"
        >
          Front End Web Developer
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/hossin-habil-183866121/"
            className="bg-black bg-opacity-20 p-3 rounded-full hover:scale-110 ease-in-out duration-150 text-content link"
            target="_blank"
            aria-label="Linkedin"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/HossinHabil"
            className="bg-black bg-opacity-20 p-3 rounded-full hover:scale-110 ease-in-out duration-150 text-content link"
            target="_blank"
            aria-label="Github"
          >
            <Github />
          </Link>
        </div>
      </div>
      <Image
        priority
        src={hero_img}
        alt="Home Image"
        width={450}
        height={450}
        className="rounded-full"
        id="hero_img"
      />
    </section>
  );
};

export default HomeSection;
