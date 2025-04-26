import { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import AdminView from './components/AdminView';
import ViewToggle from './components/ViewToggle';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import favicon from './assets/favicon.svg';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isViewTransitioning, setIsViewTransitioning] = useState(false);

  useEffect(() => {
    // Add a small delay to enable animations on initial load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleView = () => {
    setIsViewTransitioning(true);
    setTimeout(() => {
      setIsAdminView(prev => !prev);
      setTimeout(() => {
        setIsViewTransitioning(false);
      }, 300);
    }, 300);
  };

  // Generate dynamic background patterns based on theme
  const patternColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.03)';
  const patternStyle = {
    backgroundImage: `
      radial-gradient(${patternColor} 1px, transparent 1px),
      radial-gradient(${patternColor} 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 20px 20px',
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 text-gray-900 dark:text-gray-100 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={patternStyle}
    >
      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-400/10 to-purple-400/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-bl-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-400/10 to-pink-400/10 dark:from-indigo-500/10 dark:to-pink-500/10 rounded-tr-full blur-3xl -z-10 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-400/5 to-purple-400/5 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center transform hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-lg">
                <img src={favicon} alt="Feedback Collector Logo" className="h-12 w-12 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold animate-gradient-text group-hover:from-indigo-500 group-hover:to-pink-500 dark:group-hover:from-indigo-400 dark:group-hover:to-pink-400 transition-all duration-300">
                Feedback Collector
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fade-in">Share your thoughts with us</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ViewToggle isAdminView={isAdminView} toggleView={toggleView} isDisabled={isViewTransitioning} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>

        <main className={`relative max-w-5xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-10 transition-all duration-500 hover-lift ${isViewTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-500/30 dark:border-blue-400/30 rounded-tl-2xl -mt-1 -ml-1 animate-shimmer"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-purple-500/30 dark:border-purple-400/30 rounded-br-2xl -mb-1 -mr-1 animate-shimmer"></div>

          <div className={`transition-opacity duration-500 ${isViewTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {isAdminView ? <AdminView /> : <FeedbackForm />}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
