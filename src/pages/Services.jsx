import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'House Cleaning',
      description: 'Deep cleaning for your entire home. We handle everything from kitchens to bedrooms.',
      price: '$89',
      duration: '2-3 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Plumbing',
      description: 'Expert plumbing repairs and installations. From leaks to full bathroom renovations.',
      price: '$120',
      duration: '1-2 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Electrical Work',
      description: 'Licensed electricians for safe and reliable electrical services and installations.',
      price: '$95',
      duration: '1-3 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'HVAC Services',
      description: 'Heating and cooling repair, maintenance, and installation by certified technicians.',
      price: '$150',
      duration: '2-4 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Landscaping',
      description: 'Professional lawn care, garden design, and outdoor maintenance services.',
      price: '$75',
      duration: '2-4 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'Handyman',
      description: 'General home repairs, furniture assembly, and small maintenance tasks.',
      price: '$65',
      duration: '1-3 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 7,
      name: 'Painting',
      description: 'Interior and exterior painting services. Professional results, hassle-free experience.',
      price: '$200',
      duration: '4-8 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 8,
      name: 'Carpet Cleaning',
      description: 'Deep steam cleaning for carpets and upholstery. Remove stains and odors effectively.',
      price: '$110',
      duration: '2-3 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 9,
      name: 'Pet Grooming',
      description: "Professional grooming for your furry friends. We'll make them look and feel great!",
      price: '$55',
      duration: '1-2 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 10,
      name: 'Window Washing',
      description: 'Crystal-clear windows inside and out. Streak-free shine guaranteed.',
      price: '$80',
      duration: '1-2 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      id: 11,
      name: 'Appliance Repair',
      description: 'Fix your broken appliances quickly. Washers, dryers, fridges, and more.',
      price: '$105',
      duration: '1-3 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 12,
      name: 'Moving Services',
      description: 'Stress-free moving with professional movers. Local and long-distance available.',
      price: '$250',
      duration: '4-8 hours',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <div id="main-content" className="page-transition">
      {/* Page Header - Mobile-first left aligned */}
      <section className="bg-warm-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-10 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-primary-200 dark:bg-primary-900/30 rounded-full filter blur-[80px] lg:blur-[100px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/50 rounded-2xl text-primary-700 dark:text-primary-300 font-semibold text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 border border-primary-200 dark:border-primary-700 transition-colors duration-300">
              Browse Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-5 lg:mb-6 text-gray-900 dark:text-white leading-[1.1] transition-colors duration-300">
              What Can We<br />Help With?
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed transition-colors duration-300">
              From home care to personal services — find what you need and book in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Mobile-first 1 col, then 2, then 3, then 4 */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-700 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-sm hover:shadow-2xl transition-all duration-300 p-5 sm:p-6 lg:p-8 flex flex-col border border-gray-100 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-500"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 text-primary-600 dark:text-primary-300 mb-4 sm:mb-5 lg:mb-6 shadow-sm transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 flex-grow leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* Price and Duration */}
                <div className="flex justify-between items-center mb-4 sm:mb-5 lg:mb-6 pb-4 sm:pb-5 lg:pb-6 border-t border-gray-100 dark:border-gray-600 pt-4 sm:pt-5 lg:pt-6 transition-colors duration-300">
                  <div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-primary-600 dark:text-primary-400">{service.price}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{service.duration}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">typical time</div>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to="/book"
                  state={{ service: service.name }}
                  className="block w-full text-center px-5 py-3.5 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-sm sm:text-base rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-200 active:scale-95 transform"
                  aria-label={`Book ${service.name} service`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Don't See What You Need?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            We're happy to help with custom requests. Reach out and let us know what you're looking for.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-bold text-sm sm:text-base rounded-full hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sage-200 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
