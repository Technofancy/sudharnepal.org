import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillContacts,
  AiFillProfile,
  AiFillBell,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { PiNewspaperFill } from "react-icons/pi";
import Logo from "../assets/logo/sudharNepal_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo section */}
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="logo" className="h-14 w-14" />
            </Link>
          </div>

          {/* Tab-large-srceen : pages navigation */}
          <div className="hidden md:flex space-x-1">
            <Link
              to="/home"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
            >
              <AiFillHome className="mr-2" />
              गृहपृष्ठ
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
            >
              <AiFillInfoCircle className="mr-2" />
              हाम्रो बारेमा
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
            >
              <AiFillContacts className="mr-2" />
              सम्पर्क
            </Link>
            <Link
              to="/notification"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
            >
              <AiFillBell className="mr-2" />
              सुचना
            </Link>
            <Link
              to="/programnews"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
            >
              <PiNewspaperFill className="mr-2" />
              कार्यक्रम
            </Link>
            <Link
              to="/registration"
              className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
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
        <div className="md:hidden absolute z-50 bg-primary w-[35%] right-0">
          <Link
            to="/home"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
          >
            <AiFillHome className="mr-2" />
            गृहपृष्ठ
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
          >
            <AiFillInfoCircle className="mr-2" />
            हाम्रो बारेमा
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
          >
            <AiFillContacts className="mr-2" />
            सम्पर्क
          </Link>
          <Link
            to="/notification"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
          >
            <AiFillBell className="mr-2" />
            सुचना
          </Link>
          <Link
            to="/programnews"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
          >
            <PiNewspaperFill className="mr-2" />
            कार्यक्रम
          </Link>
          <Link
            to="/registration"
            className="px-4 py-2 text-sm hover:bg-secondary flex items-center"
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
