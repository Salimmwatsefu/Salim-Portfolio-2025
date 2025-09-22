import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent  text-white text-sm p-3 relative overflow-hidden h-[200px]">
      {/* Starry background effect (simulated with inline styles for simplicity) */}
      <div
        className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVQYV2NkYGD4z8DAwMgABgAEgAAMiQ0hAAAAAElFTkSuQmCC')] bg-repeat opacity-50"
        style={{ backgroundSize: '10px 10px' }}
      ></div>
      <div className="relative z-10 md:flex justify-between items-center max-w-4xl space-y-10 md:space-y-0 mx-auto">
        <div>
          <span className="text-red-500 mr-2">○</span>
          <span className="font-bold">REACH ME @</span>
          <span className="text-white ml-2">sjmwatsefu@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
  <span className="text-red-500">●</span>
  <span className="font-bold">FOLLOW ME ON</span>
  
  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white mx-2 hover:text-gray-300 transition-colors"
  >
    X 
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white mx-2 hover:text-gray-300 transition-colors"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white mx-2 hover:text-gray-300 transition-colors"
  >
    GitHub
  </a>

  <a
    href="https://medium.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white mx-2 hover:text-gray-300 transition-colors"
  >
    Medium
  </a>
</div>

      </div>
      {/* Faint "CONTACT" text in the background */}
      <div className="absolute inset-0 flex items-center -bottom-44 justify-center opacity-5 pointer-events-none">
        <span className="md:block hidden text-8xl font-bold text-orange-300  tracking-widest">
          STAY CONNECTED
        </span>
        <span className="md:hidden block text-6xl font-bold text-orange-300  tracking-widest">
          CONNECTED
        </span>
      </div>




      
    </footer>
  );
};

export default Footer;