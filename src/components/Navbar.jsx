import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Diamond } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ isDark, toggleTheme }) => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-4">
          <span className="font-extrabold text-3xl md:text-4xl tracking-wider text-black dark:text-white drop-shadow-sm">
            مصنع النفيس للذهب
          </span>
          <div>
            <Diamond className="h-10 w-10 text-gold-DEFAULT drop-shadow-md" />
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 font-semibold text-gray-700 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-gold-DEFAULT transition-colors cursor-pointer">الرئيسية</Link>
            </li>
            <li>
              <a href="/#showcase" className="hover:text-gold-DEFAULT transition-colors cursor-pointer">المجموعة</a>
            </li>
            <li>
              <a href="/#about" className="hover:text-gold-DEFAULT transition-colors cursor-pointer">من نحن</a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-gold-DEFAULT transition-colors cursor-pointer">تواصل معنا</a>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-DEFAULT"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
