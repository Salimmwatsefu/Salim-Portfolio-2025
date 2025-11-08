import { useState, useEffect, type ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import FullScreenMenu from "./FullScreenMenu";

interface SidebarLayoutProps {
  children: ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div className="flex text-white h-screen relative">
      <div className="w-24 flex flex-col items-center py-6 border-r border-gray-700 z-50">
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="border-b border-gray-700 w-full h-[60px] py-6 flex justify-center items-center  focus:outline-none cursor-pointer"
>
  {!menuOpen ? (
    <div className="space-y-1">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white -ml-2 hover:ml-0 transition-all duration-300"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </div>
  ) : (
    <span className="text-xl  hover:text-gray-400 transition-colors">✕</span>
  )}
</button>


        <div className="mt-60 flex flex-col gap-7">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaMedium size={22} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex-1">{children}</div>
    </div>
  );
}