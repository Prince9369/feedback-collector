import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import AdminView from './components/AdminView';
import ViewToggle from './components/ViewToggle';
import Footer from './components/Footer';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  const toggleView = () => {
    setIsAdminView(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Feedback Collector</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ViewToggle isAdminView={isAdminView} toggleView={toggleView} />
          </div>
        </header>

        <main className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-10">
          {isAdminView ? <AdminView /> : <FeedbackForm />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
