import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
        <p className="text-gray-400 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-gray-900 px-6 py-3 rounded-r-md hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}