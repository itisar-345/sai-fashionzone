import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative h-[600px] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Discover Your Style</h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore our latest collection of traditional and modern fashion
          </p>
          <div className="space-x-4">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
              New Arrivals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}