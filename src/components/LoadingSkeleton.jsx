const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Skeleton variants */}
    </div>
  );
};

// Service Card Skeleton
export const ServiceCardSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="flex items-center justify-center h-16 w-16 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-300 rounded w-20"></div>
        <div className="h-5 bg-gray-300 rounded w-24"></div>
      </div>
      <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
    </div>
  );
};

// Testimonial Card Skeleton
export const TestimonialSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-5 w-5 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

// Text Block Skeleton
export const TextBlockSkeleton = ({ lines = 3 }) => {
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(lines)].map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-gray-300 rounded" 
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        ></div>
      ))}
    </div>
  );
};

// Page Header Skeleton
export const PageHeaderSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-gray-300 to-gray-400 py-20 animate-pulse">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-12 bg-gray-200/50 rounded w-2/3 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200/50 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  );
};

// Form Skeleton
export const FormSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-12 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
      <div className="h-14 bg-gray-300 rounded-lg w-full mt-8"></div>
    </div>
  );
};

// List Skeleton
export const ListSkeleton = ({ items = 3 }) => {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(items)].map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-12 w-12 bg-gray-300 rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
