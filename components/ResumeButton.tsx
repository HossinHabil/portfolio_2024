import React from "react";
import { Button } from "./ui/button";

const ResumeButton = () => {
  return (
    <a href="/Hossin_Habil_CV.pdf" rel="noreferrer" download>
      <Button className="bg-[#313c52] hover:bg-[#3E4A64] hover:shadow-sm transition-all text-white border-none rounded-md mx-auto">
        Resume
      </Button>
    </a>
  );
};

export default ResumeButton;
