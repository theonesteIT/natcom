import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const programsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "News & Updates", href: "/new" },
    { name: "Programs", href: "/programs", dropdown: true },
    { name: "Online Learning", href: "/online-learning" },
    { name: "Contact", href: "/contact" },
  ];

  const programLinks = [
    {
      name: "Internships",
      desc: "Explore our internship programs and get hands-on experience.",
      href: "/internships",
    },
    {
      name: "Professional Courses",
      desc: "Upgrade your skills with certified professional courses.",
      href: "/courses",
    },
    {
      name: "Career Development",
      desc: "Access resources to build and grow your professional path.",
      href: "/career-development",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-blue-900/95 backdrop-blur-xl shadow-lg" : "bg-blue-900"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-28 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/0b2a15ea-c81d-4b9d-bc16-c6f60e6aa20e.png"
              alt="N@tcom Services Ltd"
              className="h-14 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  ref={programsRef}
                  className="relative group"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <button
                    className="flex items-center text-white hover:text-yellow-300 font-medium transition-colors duration-300"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isProgramsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* FULL-WIDTH Dropdown with Slide Animation */}
                  <div
                    className={`fixed left-0 top-0 w-full bg-white text-gray-800 border-t border-yellow-300 shadow-2xl z-40 transition-all duration-500 ease-in-out ${
                      isProgramsOpen
                        ? "max-h-[600px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                    style={{ top: "80px" }} // adjust based on header height
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <div
                      className="max-w-7xl mx-auto p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                      {programLinks.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block p-6 rounded-xl border border-transparent hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300"
                        >
                          <h4 className="font-semibold text-blue-900 text-lg mb-1">
                            {subItem.name}
                          </h4>
                          <p className="text-sm text-gray-600">{subItem.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button className="px-6 py-2.5 rounded-xl font-semibold shadow-md btn-brand">
                Login / Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link to="/login">
              <Button className="px-4 py-2 rounded-lg font-semibold shadow-md text-sm btn-brand">
                Login
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-8 w-6" /> : <Menu className="h-8 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4 bg-blue-900/95 rounded-2xl border border-blue-800 mx-4 mb-4">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                    className="flex items-center justify-between w-full text-lg text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        isProgramsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isProgramsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 mt-2 space-y-2">
                      {programLinks.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Language Switch */}
            <div className="flex items-center justify-center space-x-2 text-white text-sm pt-4 border-t border-blue-700">
              <button className="hover:text-yellow-300">EN</button>
              <span>|</span>
              <button className="hover:text-yellow-300">RW</button>
              <span>|</span>
              <button className="hover:text-yellow-300">FR</button>
            </div>

            <Link to="/login" className="block">
              <Button className="w-full rounded-xl font-semibold shadow-md btn-brand">
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
