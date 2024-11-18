import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillContacts,
  AiFillProfile,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Logo from "../assets/logo/sudharNepal_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo section */}
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="logo" className="h-14 w-14" />
            </Link>
          </div>

          {/* Tab-large-srceen : pages navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/home"
              className="px-3 py-2 rounded-md hover:bg-pink-700 flex items-center"
            >
              <AiFillHome className="mr-2" />
              गृहपृष्ठ
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md hover:bg-pink-700 flex items-center"
            >
              <AiFillInfoCircle className="mr-2" />
              हाम्रो बारेमा
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md hover:bg-pink-700 flex items-center"
            >
              <AiFillContacts className="mr-2" />
              सम्पर्क
            </Link>
            <Link
              to="/registration"
              className="px-3 py-2 rounded-md hover:bg-pink-700 flex items-center"
            >
              <AiFillProfile className="mr-2" />
              फारम
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none hover:bg-gray-700"
            >
              <span className="sr-only">Open Menu</span>
              {menuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation open and close */}
      {menuOpen && (
        <div className="md:hidden absolute z-50 bg-pink-800 w-[35%] right-0">
          <Link
            to="/home"
            className="px-4 py-2 text-sm hover:bg-pink-700 flex items-center"
          >
            <AiFillHome className="mr-2" />
            गृहपृष्ठ
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-sm hover:bg-pink-700 flex items-center"
          >
            <AiFillInfoCircle className="mr-2" />
            हाम्रो बारेमा
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-sm hover:bg-pink-700 flex items-center"
          >
            <AiFillContacts className="mr-2" />
            सम्पर्क
          </Link>
          <Link
            to="/registration"
            className="px-4 py-2 text-sm hover:bg-pink-700 flex items-center"
          >
            <AiFillProfile className="mr-2" />
            फारम
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;