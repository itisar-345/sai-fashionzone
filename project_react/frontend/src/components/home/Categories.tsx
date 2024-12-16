import React from 'react';
import { categories } from '../../constants/categories';

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
              <p className="text-gray-200 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}