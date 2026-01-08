import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRefs = useRef([]);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Book Appointment', path: '/book' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Meet the Developer', path: '/developer' },
  ];

  const isActive = (path) => location.pathname === path;

  // Find the active link index
  const activeIndex = navLinks.findIndex(link => isActive(link.path));

  // Update highlight position when hovering or when route changes
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    if (targetIndex >= 0 && navRefs.current[targetIndex]) {
      const element = navRefs.current[targetIndex];
      const rect = element.getBoundingClientRect();
      const parent = element.parentElement.getBoundingClientRect();

      setHighlightStyle({
        width: rect.width,
        height: rect.height,
        transform: `translateX(${rect.left - parent.left}px)`,
        opacity: 0.92,
      });
    } else if (activeIndex < 0) {
      setHighlightStyle({ opacity: 0 });
    }
  }, [hoveredIndex, activeIndex, location.pathname]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {/* Skip to main content for keyboard navigation */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <nav className="relative bg-gradient-to-r from-warm-50 via-primary-50 to-warm-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300" role="navigation" aria-label="Main navigation">
        {/* Decorative wave border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 dark:from-primary-600 dark:via-accent-500 dark:to-primary-600 transition-colors duration-300"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-28 py-2 sm:py-3 lg:py-4">
            {/* Logo - Handwritten text with hand-drawn oval on hover */}
            <Link to="/" className="flex items-center focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500 rounded-3xl px-2 sm:px-3 py-1 sm:py-2 -ml-2 sm:-ml-3 group">
              <div className="relative">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-handwritten font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200 block" style={{ lineHeight: '1' }}>
                  Scheduly
                </span>

                {/* Hand-drawn messy oval on hover */}
                <svg
                  className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
                  viewBox="0 0 200 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 38 Q7 30, 9 22 Q11 14, 18 9 Q28 4, 42 3 Q58 2, 78 2 Q98 2, 118 3 Q138 4, 155 6 Q168 8, 178 12 Q188 16, 192 25 Q195 34, 193 42 Q191 50, 185 56 Q177 62, 165 65 Q150 68, 130 68 Q110 68, 88 67 Q68 66, 48 64 Q32 62, 20 58 Q12 54, 10 45 Q9 40, 10 38 Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-500 [animation:eraseCircle_0.4s_ease-out_forwards] group-hover:[animation:drawCircle_0.5s_ease-out_forwards]"
                    style={{
                      strokeDasharray: 620,
                      strokeDashoffset: 620
                    }}
                  />
                </svg>

                {/* Hand-drawn Z-underline (3 lines) - starts after oval */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 pointer-events-none"
                  viewBox="0 0 200 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M8 3 Q20 2.5, 40 2 Q60 1.8, 80 2.2 Q100 2.5, 120 2.8 Q140 3, 160 3.5 Q180 4, 192 4.5 L190 6.5 Q170 7, 150 7.2 Q130 7.5, 110 7.8 Q90 8, 70 8.2 Q50 8.5, 30 9 Q20 9.2, 10 9.5 L12 11.5 Q32 11, 52 10.8 Q72 10.5, 92 10.3 Q112 10, 132 10.2 Q152 10.5, 172 11 Q185 11.5, 195 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-500 [animation:eraseUnderline_0.3s_ease-out_forwards] group-hover:[animation:drawUnderline_0.4s_ease-out_0.5s_forwards]"
                    style={{
                      strokeDasharray: 450,
                      strokeDashoffset: 450
                    }}
                  />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation - Pill style with sliding highlight */}
            <div className="hidden lg:flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border-3 border-primary-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-gray-600 transition-all duration-300 relative">
              {/* Sliding highlight background */}
              <div
                className="absolute rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-primary-600 dark:via-primary-700 dark:to-primary-800 shadow-xl pointer-events-none transition-colors duration-300"
                style={{
                  ...highlightStyle,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 0,
                  left: 0,
                  top: '50%',
                  transform: `translateY(-50%) ${highlightStyle.transform || 'translateX(0)'}`,
                }}
              />

              {navLinks.map((link, index) => {
                const isItemActive = isActive(link.path);
                const isHighlighted = hoveredIndex === index || (hoveredIndex === null && isItemActive);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    ref={(el) => (navRefs.current[index] = el)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`relative z-10 font-semibold transition-colors duration-200 px-6 py-3.5 rounded-full text-sm focus:outline-none ${isHighlighted
                      ? 'text-white'
                      : isItemActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                    aria-current={isItemActive ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Theme Toggle Button - Desktop */}
              <button
                onClick={toggleTheme}
                className="ml-2 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500 transition-all duration-300 active:scale-95"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Controls - menu button and theme toggle */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Theme Toggle Button - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-3 sm:p-4 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500 transition-all duration-200 shadow-md border-2 border-primary-200 dark:border-gray-700 active:scale-95"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500 transition-all duration-200 shadow-md border-2 border-primary-200 dark:border-gray-700 active:scale-95"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Mobile-first with smooth animations */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-primary-300 dark:border-gray-700 bg-gradient-to-b from-white to-warm-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300" role="menu">
            <div className="px-3 sm:px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 30}ms`,
                    animation: 'slideIn 0.25s ease-out forwards'
                  }}
                  className={`block px-5 py-4 rounded-2xl text-base font-bold focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500 transition-all duration-200 shadow-sm active:scale-98 ${isActive(link.path)
                    ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-primary-600 dark:via-primary-700 dark:to-primary-800 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-400 border-2 border-primary-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-gray-600'
                    }`}
                  role="menuitem"
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  <span className="flex items-center justify-between">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
