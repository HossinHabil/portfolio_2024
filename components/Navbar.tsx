"use client";

import Link from "next/link";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Icon from "./Icon";
import { NavBarLinks } from "@/data/prjectsData";
import { useActivePath } from "@/lib/helpers";

const Navbar = () => {
  const checkActivePath = useActivePath();
  return (
    <nav className="fixed bottom-4 w-full text-center z-50">
      <ul className="flex items-center justify-evenly gap-5 w-80 bg-gradient-to-r from-[#67e9ff] to-[#62d7eb] mx-auto p-4 rounded-2xl">
        {NavBarLinks.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            className={`text-lg font-semibold text-white dark:text-white ${checkActivePath(link.link) ? 'bg-slate-500' : ''}`}
            scroll={true}
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
