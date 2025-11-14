import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            
            <h2 className="font-righteous text-2xl font-bold">ACM Manipal</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Advancing Computing as a Science & Profession.
            </p>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 tracking-wider uppercase">
              Navigate
            </h3>
            <div className="mt-4 flex flex-col space-y-3">
              <Link
                to="/know-us"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Know Us
              </Link>
              <Link
                to="/announcements"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Announcements
              </Link>
              <Link
                to="/the-hub"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                The Hub
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/acm_manipal/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-900"
              >
                <img
                  src="/ig-nb.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition-transform duration-300 rounded-full"
                />
              </a>
              
              <a
                href="https://medium.com/@acm.manipal" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-gray-500 hover:text-gray-900"
              >
                
                <img
                  src="/medium-icon.png"
                  alt="Medium"
                  className="w-8 h-8 hover:scale-110 transition-transform duration-300 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ACM Student Chapter, Manipal. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
