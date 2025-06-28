
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className = '' }: DarkModeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-gray-50/80 dark:border-gray-700 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 ${className}`}
      aria-label="Toggle dark mode"
    >
      <Sun className={`h-4 w-4 text-gray-600 transition-all duration-300 dark:text-gray-400 ${isDark ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} />
      <Moon className={`absolute h-4 w-4 text-gray-600 transition-all duration-300 dark:text-gray-400 ${isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
    </button>
  );
};

export default DarkModeToggle;
