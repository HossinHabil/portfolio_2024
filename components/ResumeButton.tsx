import React from 'react'
import { Button } from './ui/button'

const ResumeButton = () => {
  return (
    <Button className="bg-[#67e9ff] hover:bg-[#62d7eb] transition-all dark:bg-accent dark:hover:bg-slate-700 text-white border-none rounded-md mx-auto">
      <a href="/Hossin-Habil-CV.pdf" rel="noreferrer" download>
        Resume
      </a>
    </Button>
  )
}

export default ResumeButton