import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1617997455403-41f36e9a8c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Jewelry making process"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Handcrafted with Love</h2>
            <p className="text-gray-600 mb-6">
              Each piece is carefully crafted by hand in our studio, ensuring the highest quality and attention to detail. 
              We believe in creating timeless pieces that tell a story and become cherished parts of your jewelry collection.
            </p>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}