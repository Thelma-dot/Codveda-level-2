import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context state type
interface AppContextState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  userName: string;
  setUserName: (name: string) => void;
  isNavOpen: boolean;
  toggleNav: () => void;
}

// Create context with default values
const AppContext = createContext<AppContextState>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  userName: '',
  setUserName: () => {},
  isNavOpen: false,
  toggleNav: () => {},
});

// Create custom hook for using the context
export const useAppContext = () => useContext(AppContext);

// Define the provider props type
interface AppProviderProps {
  children: ReactNode;
}

// Create provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Toggle navigation menu (for mobile)
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    userName,
    setUserName,
    isNavOpen,
    toggleNav,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};