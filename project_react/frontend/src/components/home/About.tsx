import React from 'react';
import Button from '../ui/Button';

export default function About() {
  return (
    <div className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Fashion Store"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Welcome to SaiFashionZone</h2>
            <p className="text-gray-600 mb-6">
              At SaiFashionZone by Raiba, we bring you the finest collection of traditional and modern clothing. 
              From elegant sarees to trendy kids' wear, we offer a diverse range of fashion that combines style, 
              comfort, and quality.
            </p>
            <Button variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}