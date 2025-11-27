"use client";

import { useState } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
            <div className="text-center space-y-6 fade-in-up">
              <div className="inline-block">
                <span className="text-sm font-semibold uppercase tracking-wider text-purple-400 border border-slate-700 px-4 py-2 rounded">
                  Contact
                </span>
              </div>
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="max-w-7xl mx-auto px-6 pb-12">
            <div className="text-center space-y-6 fade-in-up-delay-1">
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Have questions. Let us know by filling out the form, and we&apos;ll be in touch!
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
                <a 
                  href="mailto:zyxen@gmail.com" 
                  className="smooth-transition hover:text-purple-400"
                >
                  zyxen@gmail.com
                </a>
                <span className="hidden md:inline text-slate-600">|</span>
                <a 
                  href="tel:+91xxxxxxxxxx" 
                  className="smooth-transition hover:text-purple-400"
                >
                  +91 xxxxxxxxxx
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="max-w-4xl mx-auto px-6 py-12">
            <div className="border border-slate-800 rounded-xl p-8 md:p-12 bg-slate-900/30 scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="fade-in-up-delay-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 smooth-transition focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div className="fade-in-up-delay-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 smooth-transition focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="fade-in-up-delay-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 smooth-transition focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div className="fade-in-up-delay-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 smooth-transition focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="fade-in-up-delay-3">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 smooth-transition focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 fade-in-up-delay-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-purple-700 smooth-transition hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Form'}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div className="py-12"></div>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
