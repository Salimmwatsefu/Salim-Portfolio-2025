import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 w-full h-full bg-black text-white transition-all duration-500 ease-in-out z-40 ${
    isOpen ? "top-0" : "top-full"
  }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-10 text-xl text-gray-300 hover:text-orange-500 transition-colors focus:outline-none"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col md:ml-48 ml-20 mt-28 h-full space-y-10 md:text-5xl text-3xl">
          <a
            href="#home"
            onClick={onClose}
            className="hover:text-gray-400 font-bold transition-all hover:translate-x-4"
          >
            <span className="text-base mr-10 text-orange-500">01. </span>
            Home
          </a>
          <a
            href="#projects"
            onClick={onClose}
            className="hover:text-gray-400 transition-all hover:translate-x-4"
          >
            <span className="text-base mr-10 text-orange-500">02. </span>
            Projects
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="hover:text-gray-400 transition-all hover:translate-x-4"
          >
            <span className="text-base mr-10 text-orange-500">03. </span>
            About
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="hover:text-gray-400 transition-all hover:translate-x-4"
          >
            <span className="text-base mr-10 text-orange-500">04. </span>
            Blog
          </a>
        </div>

        <div className="flex flex-col items-center justify-center pr-48 space-y-16 mt-28 md:ml-0 ml-44">
          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all hover:scale-125 hover:-translate-y-2"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all hover:scale-125 hover:-translate-y-2"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all hover:scale-125 hover:-translate-y-2"
            >
              <FaMedium size={32} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all hover:scale-125 hover:-translate-y-2"
            >
              <FaTwitter size={32} />
            </a>
          </div>

          {/* Animated Circle Visual */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-2 border-orange-500 opacity-20 animate-ping animation-duration-2000"></div>
            <a href="mailto:sjmwatsefu@gmail.com">
              <div className="absolute inset-4 rounded-full bg-orange-800/50"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-orange-700/30 to-orange-700/70 flex items-center justify-center">
                <span className="text-base font-bold">Lets Talk</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
