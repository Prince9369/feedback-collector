import React from 'react';

/**
 * Footer component
 * @returns {JSX.Element} - Footer with developer information
 */
const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 mt-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 stagger-children">
          <div className="flex items-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-700 dark:text-gray-300"> Designed by <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">Prince</strong></p>
            </div>
          </div>

          <div className="flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-700 dark:text-gray-300">Submitted for Feedback Collector Assignment</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 dark:text-gray-500 font-medium tracking-wider">
          <div className="flex justify-center items-center space-x-4">
            <span className="uppercase">© {new Date().getFullYear()} Feedback Collector</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
            <span>All Rights Reserved</span>
          </div>
          <div className="mt-2 text-gray-400 dark:text-gray-600">
            Made with ❤️ and modern web technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
