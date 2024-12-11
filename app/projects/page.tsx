import LatestProjectsItem from "@/components/LatestProjectsItem";
import SpotLight from "@/components/SpotLight";
import { projectsData } from "@/data/prjectsData";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col space-y-16 px-10 py-6 max-w-7xl mx-auto">
      <SpotLight />
      <Link href="/" className="flex items-center gap-4 text-2xl">
        ⬅ Go back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {projectsData.map((project) => (
          <LatestProjectsItem key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
