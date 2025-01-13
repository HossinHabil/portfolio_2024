import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss, SiPrisma } from "react-icons/si";

export default function TechnologyIcons() {
  const technologies = [
    {
      id: 1,
      icon: <RiReactjsFill className="text-3xl sm:text-4xl lg:text-5xl" />,
    },
    {
      id: 2,
      icon: <TbBrandNextjs className="text-3xl sm:text-4xl lg:text-5xl" />,
    },
    {
      id: 3,
      icon: <SiTailwindcss className="text-3xl sm:text-4xl lg:text-5xl" />,
    },
    { id: 4, icon: <SiPrisma className="text-3xl sm:text-4xl lg:text-5xl" /> },
  ];
  return (
    <div className="flex items-center gap-5">
      {technologies.map((tech) => (
        <span key={tech.id}>{tech.icon}</span>
      ))}
    </div>
  );
}
