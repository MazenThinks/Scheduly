import { Link } from 'react-router-dom';

const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  actionLink,
  onAction 
}) => {
  return (
    <div className="text-center py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
              {icon}
            </div>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Action Button */}
        {(actionLabel && (actionLink || onAction)) && (
          <>
            {actionLink ? (
              <Link
                to={actionLink}
                className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                {actionLabel}
              </Link>
            ) : (
              <button
                onClick={onAction}
                className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                {actionLabel}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Preset empty states
export const NoResultsFound = ({ searchTerm, onClear }) => (
  <EmptyState
    icon={
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    }
    title="No results found"
    description={searchTerm ? `We couldn't find anything matching "${searchTerm}". Try a different search term.` : "We couldn't find any results."}
    actionLabel={onClear ? "Clear search" : null}
    onAction={onClear}
  />
);

export const NoServicesAvailable = () => (
  <EmptyState
    icon={
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    }
    title="No services available"
    description="We're currently updating our service offerings. Please check back soon!"
    actionLabel="Go to Home"
    actionLink="/"
  />
);

export const NoAppointments = () => (
  <EmptyState
    icon={
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    }
    title="No appointments yet"
    description="You haven't booked any appointments. Schedule your first service today!"
    actionLabel="Book Now"
    actionLink="/book"
  />
);

export const ErrorState = ({ error, onRetry }) => (
  <EmptyState
    icon={
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    }
    title="Oops! Something went wrong"
    description={error || "We're having trouble loading this content. Please try again."}
    actionLabel="Try Again"
    onAction={onRetry}
  />
);

export default EmptyState;
