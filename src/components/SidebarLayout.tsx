import React, { type ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

interface SidebarLayoutProps {
  children: ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex text-white h-screen ">
      {/* Sidebar */}
      <div className="w-24 flex flex-col items-center py-6 border-r border-gray-700">
        {/* Menu Icon */}
        <div className="border-b border-gray-700 w-full py-6 flex justify-center">
          <button className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Social Icons */}
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

      {/* Main Content next to sidebar */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
