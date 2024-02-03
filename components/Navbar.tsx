import Link from "next/link";
import { Home, Code2, UserRound, MessageSquare } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Icon from "./Icon";
import { TypeIcon } from "lucide-react";

type IconType = typeof TypeIcon;

const Navbar = () => {
  const NavBarLinks = [
    {
      id: 1,
      icon: Home as IconType,
      name: "home",
      link: "#home",
    },
    {
      id: 2,
      icon: UserRound as IconType,
      name: "user-round",
      link: "#about",
    },
    {
      id: 3,
      icon: Code2 as IconType,
      name: "code-2",
      link: "#projects",
    },
    {
      id: 4,
      icon: MessageSquare as IconType,
      name: "message-square",
      link: "#contact",
    },
  ];
  return (
    <nav className="fixed bottom-4 w-full text-center z-50">
      <ul className="flex items-center justify-evenly gap-5 w-80 bg-gradient-to-r from-[#67e9ff] to-[#62d7eb] mx-auto p-4 rounded-2xl">
        {NavBarLinks.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            className="text-lg font-semibold text-white dark:text-white"
            scroll={true}
          >
            <Icon name={link.name as keyof typeof dynamicIconImports} className="h-[20px] md:h-[25px]"/>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
