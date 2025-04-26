import React from 'react';

/**
 * View toggle component (JSDoc)
 * @param {Object} props - Component props
 * @param {boolean} props.isAdminView - Whether admin view is active
 * @param {Function} props.toggleView - Function to toggle view
 * @param {boolean} props.isDisabled - Whether the toggle is disabled
 * @returns {JSX.Element} - View toggle button
 */

const ViewToggle = ({ isAdminView, toggleView, isDisabled }) => {
  return (
    <button
      onClick={toggleView}
      disabled={isDisabled}
      className={`relative overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-xl btn-shine
        ${isAdminView
          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
          : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
        }
        transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0
        ${isDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
      aria-label={isAdminView ? "Switch to User View" : "Switch to Admin View"}
    >
      {/* Animated background effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></span>

      {isAdminView ? (
        <div className="flex items-center">
          <div className="bg-white/20 p-1.5 rounded-lg mr-2.5 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <span className="font-medium">Switch to Form View</span>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="bg-white/20 p-1.5 rounded-lg mr-2.5 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span className="font-medium">View Submissions</span>
        </div>
      )}
    </button>
  );
};

export default ViewToggle;
