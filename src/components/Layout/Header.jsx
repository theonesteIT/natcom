import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Online Learning", href: "/online-learning" },
    { name: "Internships", href: "/internships" },
    { name: "Professional Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-900/95 backdrop-blur-xl shadow-lg"
          : "bg-blue-900"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/0b2a15ea-c81d-4b9d-bc16-c6f60e6aa20e.png"
              alt="N@tcom Services Ltd"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switch */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <button className="hover:text-yellow-300">EN</button>
              <span>|</span>
              <button className="hover:text-yellow-300">RW</button>
              <span>|</span>
              <button className="hover:text-yellow-300">FR</button>
            </div>

            {/* Login / Sign Up */}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-2.5 rounded-xl font-semibold shadow-md">
              Login / Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4 bg-blue-900/95 rounded-2xl border border-blue-800 mx-4 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switch */}
            <div className="flex items-center justify-center space-x-2 text-white text-sm pt-4 border-t border-blue-700">
              <button className="hover:text-yellow-300">EN</button>
              <span>|</span>
              <button className="hover:text-yellow-300">RW</button>
              <span>|</span>
              <button className="hover:text-yellow-300">FR</button>
            </div>

            {/* Login / Sign Up */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-xl font-semibold shadow-md">
              Login / Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
