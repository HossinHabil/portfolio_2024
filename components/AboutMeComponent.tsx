import Image from "next/image";
import about_me from "@/images/sections/about_me.webp";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss, SiPrisma } from "react-icons/si";

const AboutMeComponent = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row gap-8 items-center justify-between w-full md:px-8 pb-16 md:py-20"
    >
      <div
        className={`absolute bottom-4 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:hidden`}
      ></div>
      <div
        className={`absolute top-0 left-0 md:left-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:hidden`}
      ></div>
      <Image
        priority
        src={about_me}
        alt="Home Image"
        width={450}
        height={450}
        className="rounded-full z-10"
        id="about_img"
      />
      <div className="flex flex-col text-center items-center justify-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-medium text-content">
          About Me
        </h2>
        <p className="text-lg md:text-2xl font-normal text-content">
          Mid Front-End Developer with 3 years of experience using some of the
          most powerful technologies like...
        </p>
        <div className="flex items-center gap-5">
          <RiReactjsFill className="text-3xl sm:text-4xl lg:text-5xl" />
          <TbBrandNextjs className="text-3xl sm:text-4xl lg:text-5xl" />
          <SiTailwindcss className="text-3xl sm:text-4xl lg:text-5xl" />
          <SiPrisma className="text-3xl sm:text-4xl lg:text-5xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
