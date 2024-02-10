import React from "react";
import { Button } from "./ui/button";

const ResumeButton = () => {
  return (
    <a href="/Hossin_Habil_CV.pdf" rel="noreferrer" download>
      <Button className="bg-[#67e9ff] hover:bg-[#62d7eb] transition-all dark:bg-accent dark:hover:bg-slate-700 text-white border-none rounded-md mx-auto">
        Resume
      </Button>
    </a>
  );
};

export default ResumeButton;
