import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Home, ShoppingBag, Mail } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode, isNavOpen, toggleNav } = useAppContext();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-primary-600 font-bold text-2xl flex items-center space-x-2"
            >
              <span className="text-accent-600 dark:text-accent-400">Velva</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive('/')} icon={<Home size={18} />}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')} icon={<ShoppingBag size={18} />}>
              About Us
            </NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')} icon={<Mail size={18} />}>
              Contact
            </NavLink>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
            <button
              onClick={toggleNav}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isNavOpen ? (
                <X size={24} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" isActive={isActive('/')} onClick={toggleNav} icon={<Home size={18} />}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive('/about')} onClick={toggleNav} icon={<ShoppingBag size={18} />}>
              Collections
            </MobileNavLink>
            <MobileNavLink to="/contact" isActive={isActive('/contact')} onClick={toggleNav} icon={<Mail size={18} />}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children, icon }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'text-primary-600 dark:text-primary-400'
          : 'text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400'
      }`}
    >
      {icon && <span className="opacity-75">{icon}</span>}
      <span>{children}</span>
      {isActive && (
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500 dark:bg-primary-400"></div>
      )}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, isActive, children, onClick, icon }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-3 py-4 rounded-md text-base font-medium ${
        isActive
          ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-gray-800'
          : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400'
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default Header;