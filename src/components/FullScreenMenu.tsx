import React from "react";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black text-white transition-transform duration-500 ease-in-out z-40 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-10 text-2xl">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-lg mb-10"
        >
          Close ✕
        </button>
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </div>
    </div>
  );
};

export default FullScreenMenu;
