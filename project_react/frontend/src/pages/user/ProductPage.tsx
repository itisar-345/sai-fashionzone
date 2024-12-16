import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Minus, Plus } from 'lucide-react';
import Button from '../../components/ui/Button';

export function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Product thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-serif mb-4">Designer Silk Saree</h1>
          <div className="flex items-baseline space-x-4 mb-6">
            <span className="text-2xl font-medium">₹4,999</span>
            <span className="text-lg text-gray-500 line-through">₹6,999</span>
            <span className="text-green-600">30% off</span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Size</h3>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      selectedSize === size
                        ? 'border-pink-600 text-pink-600'
                        : 'border-gray-300 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-md"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-md"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="primary" size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="prose prose-sm">
              <h3>Product Description</h3>
              <p>
                Elegant designer silk saree with intricate embroidery work. Perfect for special occasions
                and festivals. Made with high-quality silk fabric that ensures comfort and durability.
              </p>
              <ul>
                <li>Pure silk fabric</li>
                <li>Traditional design with modern touch</li>
                <li>Embroidered border</li>
                <li>Includes matching blouse piece</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}