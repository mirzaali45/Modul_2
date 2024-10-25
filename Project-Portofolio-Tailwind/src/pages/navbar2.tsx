import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">My Website</div>

        {/* Links */}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="text-black hover:text-gray-300">Home</a>
          <a href="#" className="text-black hover:text-gray-300">About</a>
          <a href="#" className="text-black hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600`}>
        <a href="#" className="block text-white p-2 hover:bg-blue-700">Home</a>
        <a href="#" className="block text-white p-2 hover:bg-blue-700">About</a>
        <a href="#" className="block text-white p-2 hover:bg-blue-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
