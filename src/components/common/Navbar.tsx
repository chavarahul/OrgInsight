import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-6 w-full flex items-center justify-center z-50 px-4">
      <div
        className="flex w-full sm:w-1/2 justify-between items-center border p-3 rounded-full 
                  bg-white/20 backdrop-blur-xl border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-900"></div>
          <span className="text-gray-900 font-semibold text-lg">
            OrgInsight
          </span>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        <nav
          className={`flex-col sm:flex-row sm:flex items-center gap-3 sm:gap-6
                         absolute sm:static top-full left-0 w-full sm:w-auto bg-white/20 backdrop-blur-xl sm:bg-transparent
                         border-t sm:border-0 border-gray-200 sm:p-0 p-3 transition-all duration-300
                         ${isOpen ? "flex" : "hidden"}`}
        >
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/companies"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
