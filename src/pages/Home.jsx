import { Link } from 'react-router-dom';

const Home = () => {
  // Benefits
  const benefits = [
    {
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Save Time',
      description: 'Book appointments in seconds, not hours. No more phone calls or waiting on hold.'
    },
    {
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trusted Professionals',
      description: 'All service providers are vetted, licensed, and highly rated by real customers.'
    },
    {
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparent Pricing',
      description: 'See clear pricing upfront. No surprises, no hidden fees—just honest service.'
    },
    {
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Satisfaction Guaranteed',
      description: "Not happy? We'll make it right. Your satisfaction is our top priority."
    }
  ];

  // How it works steps
  const steps = [
    {
      number: '1',
      title: 'Choose Your Service',
      description: 'Browse our services and pick the one that fits your needs.',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Pick Your Time',
      description: 'Select a date and time that works best for your schedule.',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Relax & Enjoy',
      description: "We'll handle the rest. A professional will arrive right on time.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: '👩',
      rating: 5,
      text: 'Scheduly made booking a plumber so easy! The whole process took less than 2 minutes. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: '👨',
      rating: 5,
      text: 'I use Scheduly for all my office maintenance needs. Professional service every single time.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Parent',
      image: '👩‍🦰',
      rating: 5,
      text: 'As a busy mom, Scheduly saves me so much time. No more endless phone calls trying to book appointments!'
    }
  ];

  return (
    <div id="main-content" className="page-transition">
      {/* Hero Section - Mobile-first, left-aligned with side image space */}
      <section className="bg-warm-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative overflow-hidden min-h-[85vh] sm:min-h-[80vh] lg:min-h-[75vh] flex items-center transition-colors duration-300" aria-labelledby="hero-heading">
        {/* Decorative circles - different positions */}
        <div className="absolute top-20 right-10 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-primary-200 dark:bg-primary-900/30 rounded-full filter blur-[80px] lg:blur-[100px] opacity-30"></div>
        <div className="absolute bottom-10 left-10 sm:left-20 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-accent-200 dark:bg-accent-900/30 rounded-full filter blur-[60px] lg:blur-[80px] opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left content */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 lg:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/50 rounded-2xl text-xs sm:text-sm font-semibold text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 transition-colors duration-300">
                <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>15,000+ happy customers</span>
              </div>

              {/* Headline - responsive sizing */}
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-5 leading-[1.15] text-gray-900 dark:text-white transition-colors duration-300">
                Book Services<br />
                <span className="text-primary-600 dark:text-primary-400">in Minutes</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-7 lg:mb-8 text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl transition-colors duration-300">
                Skip the phone calls. Find trusted pros for home care, repairs, and more. Booking takes seconds.
              </p>

              {/* Buttons - stacked on mobile, inline on larger screens */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book"
                  className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-sm sm:text-base rounded-full hover:from-primary-600 hover:to-primary-700 hover:shadow-2xl transition-all duration-300 shadow-xl text-center active:scale-95"
                  aria-label="Book an appointment now"
                >
                  Book Now
                </Link>
                <Link
                  to="/services"
                  className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold text-sm sm:text-base rounded-full hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 text-center active:scale-95"
                  aria-label="View all services"
                >
                  See Services
                </Link>
              </div>
            </div>

            {/* Right side - visual element */}
            <div className="hidden lg:block relative">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 rounded-[3rem] p-12 shadow-2xl transform rotate-3 transition-colors duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 transform -rotate-3 transition-colors duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-warm-50 dark:bg-gray-700 rounded-2xl transition-colors duration-300">
                      <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                        HR
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 dark:text-gray-100">Home Repair</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Available today</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-warm-50 dark:bg-gray-700 rounded-2xl transition-colors duration-300">
                      <div className="w-12 h-12 bg-accent-500 dark:bg-accent-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                        HC
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 dark:text-gray-100">House Cleaning</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Book instantly</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-warm-50 dark:bg-gray-700 rounded-2xl transition-colors duration-300">
                      <div className="w-12 h-12 bg-sage-500 dark:bg-sage-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                        PC
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 dark:text-gray-100">Personal Care</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Same-day slots</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile-first 1 column, then 2 columns */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
              Why People Love Scheduly
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed transition-colors duration-300">
              Four reasons to try us out
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-gradient-to-br from-warm-50 to-white dark:from-gray-700 dark:to-gray-800 border-2 border-gray-100 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile-first timeline */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-warm-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
              Three Simple Steps
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              From browsing to booking — done in minutes
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-6 lg:gap-8 items-center`}>
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white text-2xl sm:text-3xl lg:text-4xl font-display font-bold rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 mt-6 w-1 h-24 bg-gradient-to-b from-primary-300 dark:from-primary-600 to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-5 sm:p-6 lg:p-8 shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                    <div className="text-primary-600 dark:text-primary-400 flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Single column with alternating layout */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Real Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Hear from folks who use Scheduly
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-warm-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-[2.5rem] p-10 lg:p-14 shadow-lg border-2 border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 rounded-3xl flex items-center justify-center text-5xl shadow-lg">
                      {testimonial.image}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="h-6 w-6 text-accent-400 dark:text-accent-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 dark:text-gray-200 text-xl lg:text-2xl mb-6 leading-relaxed font-light italic transition-colors duration-300">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div>
                      <div className="font-display font-bold text-gray-900 dark:text-white text-lg transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile-first split layout */}
      <section className="bg-white dark:bg-gray-900 py-12 sm:py-14 lg:py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-800 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-5 leading-tight">
                  Ready When You Are
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
                  Join thousands who've ditched the hassle and started booking the easy way.
                </p>
                <div>
                  <Link
                    to="/book"
                    className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-600 font-bold text-sm sm:text-base rounded-full hover:bg-warm-50 hover:scale-105 transition-all duration-300 shadow-xl active:scale-95"
                  >
                    Book Your First Service
                  </Link>
                </div>
              </div>

              {/* Right side - Visual stats */}
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 lg:p-10 xl:p-12 flex items-center justify-center">
                <div className="space-y-4 sm:space-y-5 lg:space-y-6 w-full max-w-sm">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/30">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">15K+</div>
                    <div className="text-white/90 text-sm sm:text-base">Happy customers</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/30">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">4.9★</div>
                    <div className="text-white/90 text-sm sm:text-base">Average rating</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/30">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">&lt;2min</div>
                    <div className="text-white/90 text-sm sm:text-base">Average booking time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
