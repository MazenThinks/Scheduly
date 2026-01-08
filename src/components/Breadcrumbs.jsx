import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const formatSegment = (segment) => {
  // Custom labels for specific routes
  const customLabels = {
    'developer': 'Meet the Developer',
    'book': 'Book Appointment',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact',
  };

  if (customLabels[segment]) {
    return customLabels[segment];
  }

  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide breadcrumbs on home
  if (!pathname || pathname === '/') return null;

  // Only show breadcrumbs for known top-level routes
  const allowedBases = ['/services', '/book', '/about', '/contact', '/developer'];
  const isAllowed = allowedBases.some((base) => pathname === base || pathname.startsWith(base + '/'));
  if (!isAllowed) return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, idx) => ({
    name: formatSegment(seg),
    path: '/' + segments.slice(0, idx + 1).join('/'),
    isLast: idx === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="bg-transparent">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-20 sm:mt-28 flex items-center gap-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-gray-500 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded px-1 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.path} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {crumb.isLast ? (
              <span className="text-gray-700 font-normal">{crumb.name}</span>
            ) : (
              <Link 
                to={crumb.path} 
                className="text-gray-500 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded px-1 transition-colors duration-200"
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
