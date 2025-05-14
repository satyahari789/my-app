// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">SIRIS APPS</Link>
        </div>
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/product">Products</Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/services" className="block py-2">Services</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
