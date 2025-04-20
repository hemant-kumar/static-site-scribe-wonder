
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-green-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Tech Chatter Box
          </Link>
          
          <div className="flex gap-6">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
