
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-green-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Tech Chatter Box
          </Link>
          
          {isSearchOpen ? (
            <div className="flex-grow mx-4">
              <SearchBar />
            </div>
          ) : (
            <div className="hidden md:flex gap-6">
              <Link to="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                All Posts
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-green-600 transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label={isSearchOpen ? "Close search" : "Open search"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                {isSearchOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5zm0 0L21 21" />
                )}
              </svg>
            </button>
            
            <div className="md:hidden">
              <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <path d="M4 12h16M4 6h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
