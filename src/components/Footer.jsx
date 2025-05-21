import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Top Section: Description & Icons in Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          {/* Description */}
          <div className="flex">
            <p className="max-w-md">
              Create a modern and minimalist blog with Katen – a clean, fast, and powerful template for writers.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-3"
          />
          <div className="text-gray-500">Partner: John Doe</div>
        </div>

        {/* Footer Copyright */}
        <div className="flex text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Katen Template – All rights reserved.
        </div>
      </div>
    </footer>
  );
};
