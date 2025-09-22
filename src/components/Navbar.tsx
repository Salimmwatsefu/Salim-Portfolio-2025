import RevealEmail from './ui/RevealEmail';

function Navbar() {
  return (
    <div className="bg-transparent">
      <div className="mt-7 mx-10 md:flex space-y-12 md:space-y-0 items-center justify-between">
        {/* Left side - Name & Title */}
        <nav>
          <div>
            <h1 className="text-2xl">Salim Mwatsefu</h1>
            <h2 className="text-xs text-gray-400">Software Engineer</h2>
          </div>
        </nav>

        {/* Right side - Social Icons */}
        <div className="flex space-x-6 mr-14">
        <RevealEmail />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
