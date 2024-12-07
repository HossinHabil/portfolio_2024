import Link from "next/link";
import { Code2 } from "lucide-react";

import { DarkModeToggle } from "@/components/DarkModeToggle";
import ResumeButton from "@/components/ResumeButton";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="flex items-center p-10 max-w-7xl mx-auto">
        <Link
          href="/"
          className="bg-[#67e9ff] p-2 rounded-full text-content nav_link"
        >
          <Code2 />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4 nav_link">
          {/* <DarkModeToggle /> */}
          <ResumeButton />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
