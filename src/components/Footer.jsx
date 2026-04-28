import React from 'react';
import { Diamond } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center items-center gap-2 mb-6">
        <Diamond className="h-6 w-6 text-gold-DEFAULT" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">روائع المعادن</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لروائع المعادن.
      </p>
    </div>
  </footer>
);

export default Footer;
