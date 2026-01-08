const About = () => {
  const values = [
    {
      emoji: '⚡',
      title: 'Speed & Simplicity',
      description: "Life's too short for complicated booking. We make it fast and easy."
    },
    {
      emoji: '🤝',
      title: 'Trust & Reliability',
      description: 'Vetted professionals who show up on time and do great work.'
    },
    {
      emoji: '💙',
      title: 'Customer Love',
      description: "You're not just a booking number. We genuinely care about helping you."
    },
    {
      emoji: '🌟',
      title: 'Quality First',
      description: 'No shortcuts. No compromises. Just excellent service, every time.'
    }
  ];

  return (
    <div id="main-content" className="page-transition">
      {/* Page Header - Mobile-first */}
      <section className="bg-warm-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-10 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-primary-200 dark:bg-primary-900/30 rounded-full filter blur-[80px] lg:blur-[100px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 rounded-2xl text-primary-700 font-semibold text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 border border-primary-200">
              About Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-5 lg:mb-6 text-gray-900 leading-[1.1]">
              We Make Booking<br />Services Easy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              No more phone tag, confusing schedules, or wasted time. Just simple, fast booking.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-warm-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Remember the last time you needed a plumber? Or tried to find someone to clean your gutters?
              You probably spent way too long searching online, making awkward phone calls,
              and waiting for people to get back to you.
            </p>

            <p className="text-xl leading-relaxed">
              Yeah, we've been there too. That's why we made Scheduly.
            </p>

            <p className="text-xl leading-relaxed">
              We started in 2020 with a simple goal: make booking home services
              <span className="font-bold text-primary-600"> easy, clear, and stress-free</span>.
              No phone tag. No confusion. Just a few clicks and you're done.
            </p>

            <p className="text-xl leading-relaxed">
              Today, thousands of people use Scheduly every month to find help with everything from
              cleaning to repairs to moving. We're proud to connect folks with great pros who actually
              show up and do good work.
            </p>

            <div className="bg-white rounded-4xl p-8 my-8 border border-primary-100 shadow-md">
              <p className="text-2xl font-display font-bold text-gray-800 text-center mb-2">
                "Your time matters. Your home deserves good care."
              </p>
              <p className="text-center text-gray-600">— The Scheduly Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-3 sm:mb-4">What We Believe In</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Not just words on a page. This is how we actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-warm-50 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-5 sm:p-6 lg:p-8 border border-primary-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-5 lg:mb-6">
              What We're All About
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-7 lg:mb-8 text-primary-50">
              Give you back your time. Make home stuff easy.
              Connect you with people who care about doing good work.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium">
                Easy booking
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium">
                ✨ Good service
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium">
                😊 Happy people
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stats - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-3 sm:mb-4">By the Numbers</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">A few things we're proud of</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-1 sm:mb-2">15K+</div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">Happy customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-1 sm:mb-2">500+</div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">Trusted pros</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-1 sm:mb-2">4.9</div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">Average rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-1 sm:mb-2">24/7</div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Ready to Give It a Try?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-7 lg:mb-8">
            Join thousands of people who've made booking services way easier.
          </p>
          <a
            href="/book"
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-primary-600 hover:to-primary-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your First Service
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
