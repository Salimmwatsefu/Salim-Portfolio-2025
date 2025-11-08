import { useEffect, useState } from 'react';
import RevealEmail from './ui/RevealEmail';
import FullScreenMenu from './FullScreenMenu';






function Navbar() {

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
    <div className="bg-transparent">
      <div className="mt-7 mx-10 md:flex space-y-12 md:space-y-0 items-center justify-between">
        {/* Left side - Name & Title */}
        <nav className=' flex justify-between'>
          <div>
            <h1 className="text-2xl">Salim Mwatsefu</h1>
            <h2 className="text-xs text-gray-400">Building @ <span className='text-orange-500 font-bold'>Sazara</span></h2>
          </div>

            <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="sm:hidden block  h-[60px] py-6 flex justify-center items-center  focus:outline-none "
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
        </nav>

        {/* Right side - Social Icons */}
        <div className="flex space-x-6 mr-14">
        <RevealEmail />
        </div>
      </div>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default Navbar;
