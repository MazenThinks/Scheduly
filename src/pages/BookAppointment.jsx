import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

const BookAppointment = () => {
  const location = useLocation();
  const toast = useToast();
  const preSelectedService = location.state?.service || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: preSelectedService,
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const services = [
    'House Cleaning',
    'Plumbing',
    'Electrical Work',
    'HVAC Services',
    'Landscaping',
    'Handyman',
    'Painting',
    'Carpet Cleaning',
    'Pet Grooming',
    'Window Washing',
    'Appliance Repair',
    'Moving Services'
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Invalid email address' : '';
      case 'phone':
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        return !phoneRegex.test(value) || value.length < 10 ? 'Invalid phone number' : '';
      case 'service':
        return !value ? 'Please select a service' : '';
      case 'date':
        return !value ? 'Please select a date' : '';
      case 'time':
        return !value ? 'Please select a time' : '';
      case 'address':
        return value.trim().length < 5 ? 'Please enter a valid address' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'notes') { // notes is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      toast.success(`Appointment booked successfully for ${formData.date} at ${formData.time}!`);

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          address: '',
          notes: ''
        });
        setErrors({});
        setTouched({});
      }, 4000);
    } else {
      toast.error('Please fix the errors in the form');
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div id="main-content" className="page-transition">
      {/* Page Header - Mobile-first */}
      <section className="bg-warm-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-10 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-primary-200 rounded-full filter blur-[80px] lg:blur-[100px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-700 dark:text-primary-300 font-semibold text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 border border-primary-200 dark:border-primary-700 transition-colors duration-300">
              Book Appointment
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-5 lg:mb-6 text-gray-900 dark:text-white leading-[1.1] transition-colors duration-300">
              Let's Get You<br />Scheduled
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed transition-colors duration-300">
              Pick your service, choose a time that works, and we'll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            // Success Confirmation Screen - Mobile-first
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg p-6 sm:p-8 lg:p-12 text-center border border-primary-100 dark:border-gray-700 transition-colors duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 lg:mb-8">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 transition-colors duration-300">You're All Set!</h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 transition-colors duration-300">
                Thanks, <span className="font-bold text-primary-600">{formData.firstName}</span>!
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 lg:mb-8 leading-relaxed transition-colors duration-300">
                Your <span className="font-semibold">{formData.service}</span> appointment is scheduled for{' '}
                <span className="font-semibold">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> at{' '}
                <span className="font-semibold">{formData.time}</span>.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 mb-6 sm:mb-7 lg:mb-8 border border-primary-100 dark:border-primary-800 transition-colors duration-300">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  We've sent a confirmation to{' '}
                  <span className="font-semibold text-primary-700 dark:text-primary-400">{formData.email}</span>.
                  Check your inbox for all the details!
                </p>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
                Looking forward to serving you. Have a great day! 😊
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg p-5 sm:p-8 lg:p-12 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* Service Selection */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 flex items-center transition-colors duration-300">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 shadow-md text-base sm:text-lg">1</span>
                    <span className="text-base sm:text-xl lg:text-2xl">What do you need help with?</span>
                  </h2>
                  <div>
                    <label htmlFor="service" className="label text-base">
                      Choose a service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field text-base ${errors.service && touched.service ? 'border-red-400 focus:ring-red-300' : ''}`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && touched.service && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-10 transition-colors duration-300">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 flex items-center transition-colors duration-300">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 shadow-md text-base sm:text-lg">2</span>
                    <span className="text-base sm:text-xl lg:text-2xl">When works best for you?</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="label text-base">
                        Pick a date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min={today}
                        className={`input-field text-base ${errors.date && touched.date ? 'border-red-400 focus:ring-red-300' : ''}`}
                      />
                      {errors.date && touched.date && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="time" className="label text-base">
                        What time? *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field text-base ${errors.time && touched.time ? 'border-red-400 focus:ring-red-300' : ''}`}
                      >
                        <option value="">Select a time...</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && touched.time && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-10 transition-colors duration-300">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 lg:mb-6 flex items-center transition-colors duration-300">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 shadow-md text-base sm:text-lg">3</span>
                    <span className="text-base sm:text-xl lg:text-2xl">Tell us about yourself</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="label text-base">
                        First name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field text-base ${errors.firstName && touched.firstName ? 'border-red-400 focus:ring-red-300' : ''}`}
                        placeholder="First name"
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="label text-base">
                        Last name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field text-base ${errors.lastName && touched.lastName ? 'border-red-400 focus:ring-red-300' : ''}`}
                        placeholder="Last name"
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
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
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="address" className="label text-base">
                      Where should we come? *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field text-base ${errors.address && touched.address ? 'border-red-400 focus:ring-red-300' : ''}`}
                      placeholder="Your service address"
                    />
                    {errors.address && touched.address && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="border-t border-gray-200 pt-8 sm:pt-10">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6 flex items-center">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-300 to-gray-400 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 shadow-md text-base sm:text-lg">4</span>
                    <span className="text-base sm:text-xl lg:text-2xl">Anything else? (Optional)</span>
                  </h2>
                  <div>
                    <label htmlFor="notes" className="label text-base">
                      Special requests or details
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="4"
                      className="input-field resize-none text-base"
                      placeholder="Let us know if there's anything special we should keep in mind..."
                    />
                  </div>
                </div>

                {/* Submit Button - Mobile-first */}
                <div className="border-t border-gray-200 pt-8 sm:pt-10">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95"
                  >
                    Confirm Your Booking
                  </button>
                  <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
                    We'll confirm everything within 24 hours
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
