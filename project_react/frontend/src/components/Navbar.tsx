import React from 'react';
import { Heart, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-serif ml-2">Handmade Love</h1>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}