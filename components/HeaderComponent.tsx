import Link from "next/link";
import { Code2 } from "lucide-react";

import ResumeButton from "@/components/ResumeButton";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="flex items-center p-10 max-w-7xl mx-auto">
        <Link
          href="/"
          className="bg-[#313c52] hover:bg-[#3E4A64] hover:shadow-sm transition-all text-white p-2 rounded-full text-content nav_link"
          aria-label="Home"
        >
          <Code2 />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4 nav_link">
          <ResumeButton />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
