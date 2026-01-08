import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on /book page since user is already there
  const shouldShow = location.pathname !== '/book';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!shouldShow) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        } md:hidden`}
    >
      <Link
        to="/book"
        className="flex items-center gap-2 px-5 sm:px-6 lg:px-7 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold text-sm sm:text-base rounded-full shadow-2xl hover:from-primary-500 hover:to-primary-600 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
        aria-label="Quick book appointment"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Book Now</span>
      </Link>
    </div>
  );
};

export default FloatingCTA;
