import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 
                          text-white flex items-center justify-center 
                          font-bold text-xl rounded-full shadow-lg">
            🎓
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r 
                           from-blue-600 to-orange-500 
                           bg-clip-text text-transparent tracking-wide">
            QUIZ APP
          </span>
        </Link>

        {/* Desktop Menu - Right Side */}
        <nav className="hidden md:flex space-x-8 ml-auto items-center">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link to="/services" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">
            Contact
          </Link>

          {/* Highlighted Login Button */}
          <Link
            to="/login"
            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 
                       text-white font-semibold rounded-full 
                       shadow-md hover:shadow-xl 
                       hover:scale-105 transition duration-300"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
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
          <nav className="flex flex-col space-y-3 px-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

            {/* Mobile Highlight Login */}
            <Link
              to="/login"
              className="bg-orange-500 text-white text-center py-2 rounded-md font-semibold"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
