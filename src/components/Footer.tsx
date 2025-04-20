
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Tech Chatter Box
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Your source for programming insights and tech news.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Tech Chatter Box. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
