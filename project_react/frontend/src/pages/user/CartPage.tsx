import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '../../components/ui/Button';

export function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-serif mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="space-y-8">
            {[1, 2].map((item) => (
              <div key={item} className="flex space-x-6 border-b pb-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Designer Silk Saree</h3>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Size: Free Size</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <button className="p-1 border rounded-md">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">1</span>
                      <button className="p-1 border rounded-md">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-medium">₹4,999</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-lg font-medium mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹9,998</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">₹99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">₹499</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">₹10,596</span>
              </div>
            </div>
          </div>
          <Button variant="primary" size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}