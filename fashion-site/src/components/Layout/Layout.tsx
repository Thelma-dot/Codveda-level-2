import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isDarkMode, isNavOpen, toggleNav } = useAppContext();

  // Close mobile nav when route changes
  useEffect(() => {
    if (isNavOpen) {
      toggleNav();
    }
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow pt-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;