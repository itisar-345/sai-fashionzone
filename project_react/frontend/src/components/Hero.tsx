import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Jewelry making"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Handcrafted with Love</h1>
          <p className="text-xl md:text-2xl mb-8">Unique jewelry pieces made with passion and care</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}