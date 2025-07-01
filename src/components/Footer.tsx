import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-200" />
          </button>

          {/* Main Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Thanks for stopping by!</h3>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              This portfolio was built with React, TypeScript, and Tailwind CSS. 
              Feel free to reach out if you have any questions or just want to connect.
            </p> */}
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="flex items-center justify-center gap-2 text-gray-400">
              © 2025 Prashanthi Nallapu.
              {/* <Heart size={16} className="text-red-500 animate-pulse" />
     */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;