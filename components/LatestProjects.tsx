import { projectsData } from "@/data/prjectsData";
import React from "react";
import LatestProjectsItem from "./LatestProjectsItem";

const LatestProjects = () => {
  return (
    <section id="projects" className="relative flex flex-col gap-8 items-center justify-between text-center w-full md:px-8 pb-16 md:py-20">
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
      <div className="flex flex-col w-full">
        <h2 className="text-3xl md:text-4xl font-medium dark:text-[#57c3ad]">
          My Latest Projects
        </h2>
        <p className="text-lg md:text-2xl font-normal dark:text-[#57c3ad]">
          Some of the projects I&apos;ve worked on
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {projectsData.map((project) => (
          <LatestProjectsItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
