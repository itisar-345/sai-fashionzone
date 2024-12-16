import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pearl Drop Earrings',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Gold Chain Necklace',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Silver Ring Set',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-center mb-12">Featured Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                Quick View
              </button>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}