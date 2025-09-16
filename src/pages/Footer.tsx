import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent  text-white text-sm p-3 relative overflow-hidden h-[200px]">
      {/* Starry background effect (simulated with inline styles for simplicity) */}
      <div
        className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVQYV2NkYGD4z8DAwMgABgAEgAAMiQ0hAAAAAElFTkSuQmCC')] bg-repeat opacity-50"
        style={{ backgroundSize: '10px 10px' }}
      ></div>
      <div className="relative z-10 flex justify-between items-center max-w-4xl mx-auto">
        <div>
          <span className="text-red-500 mr-2">○</span>
          <span className="font-bold">REACH ME AT</span>
          <span className="text-white ml-2">sjmwatsefu@gmail.com</span>
        </div>
        <div>
          <span className="text-red-500 mr-2">●</span>
          <span className="font-bold">FOLLOW ME ON</span>
          <span className="text-white ml-2">Behance</span>
          <span className="text-white mx-2">Dribbble</span>
          <span className="text-white mx-2">Awwwards</span>
          <span className="text-white mx-2">X / Twitter</span>
          <span className="text-white mx-2">LinkedIn</span>
        </div>
      </div>
      {/* Faint "CONTACT" text in the background */}
      <div className="absolute inset-0 flex items-center -bottom-44 justify-center opacity-5 pointer-events-none">
        <span className="text-8xl font-bold text-orange-300  tracking-widest">
          STAY CONNECTED
        </span>
      </div>


      
    </footer>
  );
};

export default Footer;