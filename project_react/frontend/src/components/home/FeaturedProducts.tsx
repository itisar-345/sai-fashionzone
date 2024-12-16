import React from 'react';
import { featuredProducts } from '../../constants/products';
import Button from '../ui/Button';

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-serif">Featured Collection</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <Button variant="primary" size="sm" className="w-full">
                  Quick View
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-pink-600 font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}