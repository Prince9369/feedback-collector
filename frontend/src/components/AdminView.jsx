import React, { useState, useEffect } from 'react';
import { getFeedbacks } from '../api/feedbackApi';

/**
 * Admin view component to display all feedbacks (JSDoc)
 * @returns {JSX.Element} - Admin view
 */

const AdminView = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setIsLoading(true);
        const data = await getFeedbacks();
        setFeedbacks(data);
        setError(null);
      } catch (err) {
        setError('Failed to load feedbacks. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  /**
   * Format date string
   * @param {string} dateString - ISO date string
   * @returns {string} - Formatted date
   */

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
          <div className="relative animate-spin rounded-full h-16 w-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 border-r-indigo-500 dark:border-r-indigo-400"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">Loading feedbacks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-8 rounded-xl shadow-lg border border-red-200 dark:border-red-800/50 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="absolute -inset-4 rounded-full bg-red-500/20 blur-xl animate-pulse"></div>
          <div className="relative bg-red-100 dark:bg-red-800/50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Error Loading Feedbacks</h3>
        <p className="text-red-600 dark:text-red-300 max-w-md">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/50 transition-colors duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-10 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center justify-center h-80">
        <div className="relative mb-6 animate-float">
          <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl"></div>
          <div className="relative bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">No Feedbacks Yet</h3>
        <p className="text-gray-600 dark:text-gray-300 font-medium mb-2 max-w-md">Looks like no one has submitted feedback yet.</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">Feedback submissions will appear here once users start providing their input. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="relative group">
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-12 opacity-70 blur-sm group-hover:rotate-45 group-hover:scale-110 transition-all duration-300"></div>
          <h2 className="relative text-2xl font-bold text-gray-800 dark:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-500 dark:text-blue-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300">
              Feedback Submissions
            </span>
          </h2>
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-5 py-2.5 rounded-full shadow-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          {feedbacks.length} {feedbacks.length === 1 ? 'Entry' : 'Entries'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {feedbacks.map((feedback, index) => (
          <div
            key={feedback._id || index}
            className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transform hover:-translate-y-2"
          >
            <div className="relative">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span className="text-lg font-bold group-hover:scale-110 transition-transform duration-300">{feedback.fullName.charAt(0).toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feedback.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {feedback.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 px-3 py-1.5 rounded-full shadow-sm flex items-center group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-indigo-900/20 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-500 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {feedback.timestamp ? formatDate(feedback.timestamp) : 'No date'}
                    </span>
                  </div>
                </div>

                <div className="mt-5 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/30 dark:to-blue-900/10 p-5 rounded-xl shadow-inner group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-900/10 dark:group-hover:to-indigo-900/10 transition-colors duration-300">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {feedback.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {feedbacks.length > 0 && (
        <div className="flex justify-center mt-10">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-3 rounded-xl text-blue-600 dark:text-blue-300 flex items-center shadow-md transform hover:-translate-y-1 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Feedback entries are sorted by submission date (newest first)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;
