// src/components/Navbar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gray-800 p-4 shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link href="/" className="text-lg font-semibold hover:text-blue-400 transition-colors cursor-pointer">
          SURENDAR P
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`hover:text-gray-400 transition-colors ${isActive('/') ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-gray-400 transition-colors ${isActive('/about') ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`hover:text-gray-400 transition-colors ${isActive('/projects') ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : ''}`}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-gray-400 transition-colors ${isActive('/contact') ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400 rounded p-1"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="space-y-2 pb-2">
          <Link 
            href="/" 
            className={`block text-white hover:text-gray-400 transition-colors py-2 px-4 rounded hover:bg-gray-700 ${isActive('/') ? 'bg-blue-600 text-white font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`block text-white hover:text-gray-400 transition-colors py-2 px-4 rounded hover:bg-gray-700 ${isActive('/about') ? 'bg-blue-600 text-white font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`block text-white hover:text-gray-400 transition-colors py-2 px-4 rounded hover:bg-gray-700 ${isActive('/projects') ? 'bg-blue-600 text-white font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`block text-white hover:text-gray-400 transition-colors py-2 px-4 rounded hover:bg-gray-700 ${isActive('/contact') ? 'bg-blue-600 text-white font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
