import Link from "next/link";
import React from "react";
import { Code2 } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import ResumeButton from "./ResumeButton";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="flex items-center p-10 max-w-7xl mx-auto">
        <Link href="/" prefetch={false} className="bg-[#67e9ff] p-2 rounded-full text-white">
          <Code2 />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <DarkModeToggle />
          <ResumeButton />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
