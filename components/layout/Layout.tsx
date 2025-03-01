import { ReactNode } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gradient-to-b from-[#6B63FF] to-[#5B54E8]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">About Cush</h3>
              <p className="text-sm text-gray-100">
                Experience the perfect blend of comfort and innovation with Cush. Our premium sleep products are designed for better posture and pain relief.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-100 hover:text-[#CCFF00]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-100 hover:text-[#CCFF00]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm text-gray-100 hover:text-[#CCFF00]">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-sm text-gray-100 hover:text-[#CCFF00]">
                    Returns Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-100">Email: support@cushsleep.com</p>
              <p className="text-sm text-gray-100">Phone: +91 1234567890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-100 hover:text-[#CCFF00]">
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-sm text-gray-100 text-center">© 2024 Cush. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 