import Image from "next/image";
import about_me from "@/images/sections/about_me.webp";
import TechnologyIcons from "./TechnologyIcons";

const AboutMeComponent = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between w-full md:px-8 pb-16 md:py-20"
    >
      <div
        aria-hidden="true"
        className={`absolute bottom-4 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animation-delay-4000 dark:hidden`}
      ></div>
      <div
        aria-hidden="true"
        className={`absolute top-0 left-0 md:left-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animation-delay-4000 dark:hidden`}
      ></div>
      <Image
        priority
        src={about_me}
        alt="AboutMe Image"
        className="w-[350px] md:w-[450px] rounded-full"
        sizes="(max-width: 768px) 350px, 450px"
        id="about_img"
      />
      <div className="flex flex-col text-center items-center justify-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-medium text-content">
          About Me
        </h2>
        <p className="text-lg md:text-2xl font-normal text-content">
          Mid Front-End Developer with over 4 years of experience using some of
          the most powerful technologies like...
        </p>
        <TechnologyIcons />
      </div>
    </section>
  );
};

export default AboutMeComponent;
