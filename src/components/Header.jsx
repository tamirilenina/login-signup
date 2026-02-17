import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* AJIO Logo */}
        <Link to="/" className="flex items-center space-x-2">
          
          {/* Logo Box */}
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg tracking-widest rounded">
            A
          </div>

          {/* Logo Text */}
          <span className="text-2xl font-extrabold tracking-widest text-black">
            AJIO
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-black">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-black">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Link to="/" className="block text-gray-700 hover:text-black">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-black">
              About
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-black">
              Services
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-black">
              Contact
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-black">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
