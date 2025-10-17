import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "home", label: "Home", icon: "🏠" },
    { name: "about", label: "About", icon: "👨‍💻" },
    { name: "skills", label: "Skills", icon: "⚡" },
    { name: "projects", label: "Projects", icon: "🚀" },
    { name: "contact", label: "Contact", icon: "📞" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Brand Section with Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center space-x-3"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer group flex items-center space-x-2"
            >
              {/* Logo */}
           <motion.img
  src="/logo/Anand-logo.png"
  alt="Anand Logo"
  className="w-12 h-12 object-contain rounded-md"
/>

              {/* Name */}
              <div className="flex flex-col">
               

                {/* Underline effect */}
                <motion.div
                  className="h-0.5 w-0 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="group relative px-4 py-2 rounded-lg cursor-pointer transition-all duration-300"
                  activeClass="text-teal-400"
                  spy={true}
                >
                  <motion.div
                    className="flex items-center space-x-2 text-gray-300 group-hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-500 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white transition-all duration-300"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="py-4 space-y-2 bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-800 mx-4 mb-4"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.name}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={closeMenu}
                      className="group block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-blue-500/20 transition-all duration-200 cursor-pointer"
                      activeClass="text-teal-400 bg-teal-500/10"
                      spy={true}
                    >
                      <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                        <motion.span
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Overlay for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
