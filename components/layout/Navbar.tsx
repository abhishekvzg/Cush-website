import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-b from-[#E8E6FF] to-[#C5C4FF]">
      <nav className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start relative">
            <span className="text-2xl font-bold text-black">CUSH</span>
            <div className="bg-[#CCFF00] h-1.5 w-full absolute -bottom-1"></div>
            <span className="text-[10px] font-medium text-black mt-2">REST EASY, DREAM BIG</span>
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/combos" className="text-sm text-black hover:text-[#6B63FF]">Combos</Link>
            <Link href="/bestsellers" className="text-sm text-black hover:text-[#6B63FF]">Bestsellers</Link>
            <Link href="/new-launches" className="text-sm text-black hover:text-[#6B63FF]">New Launches</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-black hover:text-[#6B63FF]">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button className="text-black hover:text-[#6B63FF]">
              <UserIcon className="h-5 w-5" />
            </button>
            <button className="relative text-black hover:text-[#6B63FF]">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#CCFF00] text-xs w-5 h-5 rounded-full flex items-center justify-center text-black font-medium">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 