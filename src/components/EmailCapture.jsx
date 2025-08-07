// src/components/EmailCapture.jsx
import React from 'react';

const EmailCapture = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Future of Nursing
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our waitlist for early access & updates
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;