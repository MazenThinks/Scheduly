import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
          return 'Please enter a valid phone number';
        }
        return '';

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setTouched({});
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['(718) 342-9876', 'Mon-Fri 8AM-8PM', 'Sat-Sun 9AM-5PM'],
      link: 'tel:+17183429876'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['mazenmagdy190.mm@gmail.com', 'Available 24/7', 'Quick response time'],
      link: 'mailto:mazenmagdy190.mm@gmail.com'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office',
      details: ['847 Riverside Avenue', 'Brooklyn, NY 11207', 'United States'],
      link: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: ['Monday - Friday: 8AM - 8PM', 'Saturday: 9AM - 5PM', 'Sunday: 9AM - 5PM'],
      link: null
    }
  ];

  if (isSubmitted) {
    return (
      <div id="main-content" className="page-transition min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">
        <div className="max-w-md w-full text-center">
          <div className="bg-white dark:bg-gray-800 rounded-4xl shadow-2xl p-12 border border-primary-100 dark:border-gray-700 transition-colors duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Got It! 🎉</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
              Thanks for reaching out! We got your message and we'll get back to you within 24 hours.
            </p>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-3xl p-4 mb-6 border border-primary-100 dark:border-primary-800 transition-colors duration-300">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <strong>What's next?</strong><br />
                We'll read your message and email you back soon. Check your inbox (and maybe spam too)!
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              This will reset in a few seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="main-content" className="page-transition">
      {/* Page Header */}
      <section className="bg-warm-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-10 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-primary-200 rounded-full filter blur-[80px] lg:blur-[100px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-700 dark:text-primary-300 font-semibold text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 border border-primary-200 dark:border-primary-700 transition-colors duration-300">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-5 lg:mb-6 text-gray-900 dark:text-white leading-[1.1] transition-colors duration-300">
              We're Here<br />to Help
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed transition-colors duration-300">
              Questions, feedback, or just want to chat? Drop us a message and we'll get back to you.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 sm:py-16 lg:py-20 bg-warm-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg p-5 sm:p-8 lg:p-12 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 transition-colors duration-300">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 lg:mb-8 transition-colors duration-300">
                  Fill this out and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label text-base">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field text-base ${errors.name && touched.name ? 'border-red-400 focus:ring-red-300' : ''}`}
                      placeholder="Enter your name"
                    />
                    {errors.name && touched.name && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="label text-base">
                        Your email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field text-base ${errors.email && touched.email ? 'border-red-400 focus:ring-red-300' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && touched.email && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="label text-base">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field text-base ${errors.phone && touched.phone ? 'border-red-400 focus:ring-red-300' : ''}`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && touched.phone && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="label text-base">
                      What's this about? *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field text-base ${errors.subject && touched.subject ? 'border-red-400 focus:ring-red-300' : ''}`}
                      placeholder="I have a question about..."
                    />
                    {errors.subject && touched.subject && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label text-base">
                      Your message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field resize-none text-base ${errors.message && touched.message ? 'border-red-400 focus:ring-red-300' : ''}`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && touched.message && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 sm:py-5 px-5 sm:px-6 rounded-full font-bold text-base sm:text-lg transition-all duration-300 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:scale-[1.02] shadow-lg hover:shadow-xl'
                      } text-white`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      '✉️ Send Message'
                    )}
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center transition-colors duration-300">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar - Mobile-first */}
            <div className="lg:col-span-1">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 transition-colors duration-300">Other Ways to Reach Us</h3>

                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 transition-colors duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-1.5 sm:mb-2 transition-colors duration-300">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm mb-1 transition-colors duration-300">
                            {info.link && idx === 0 ? (
                              <a
                                href={info.link}
                                className="text-primary-600 hover:text-primary-700 font-medium"
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Response Time */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 text-white shadow-lg">
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">We're Pretty Quick</h4>
                  <p className="text-primary-50 text-xs sm:text-sm leading-relaxed">
                    We usually reply within 24 hours on weekdays. Need help right away? Give us a call.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FAQ Section - Mobile-first */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-3 sm:mb-4">Quick Questions?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Here's what people usually ask us</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <details className="bg-warm-50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 group border border-primary-100 hover:shadow-md transition-all">
              <summary className="font-bold text-base sm:text-lg text-gray-800 cursor-pointer list-none flex items-center justify-between">
                How fast do you reply?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                Usually within 24 hours on weekdays. Got something urgent? Call us and we'll help right away.
              </p>
            </details>

            <details className="bg-warm-50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 group border border-primary-100 hover:shadow-md transition-all">
              <summary className="font-bold text-base sm:text-lg text-gray-800 cursor-pointer list-none flex items-center justify-between">
                Do you do emergency services?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                Yep! Call our main number and choose the emergency option. Someone's always on call to help.
              </p>
            </details>

            <details className="bg-warm-50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 group border border-primary-100 hover:shadow-md transition-all">
              <summary className="font-bold text-base sm:text-lg text-gray-800 cursor-pointer list-none flex items-center justify-between">
                Can I book a consultation?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                Absolutely! Book one through our booking page, or mention it in the form above and we'll reach out.
              </p>
            </details>

            <details className="bg-warm-50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 group border border-primary-100 hover:shadow-md transition-all">
              <summary className="font-bold text-base sm:text-lg text-gray-800 cursor-pointer list-none flex items-center justify-between">
                Where do you work?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                We cover New York City and about 50 miles around it. Not sure if we reach you? Just ask!
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
