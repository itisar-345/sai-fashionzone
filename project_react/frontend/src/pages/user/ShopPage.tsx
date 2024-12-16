import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { categories } from '../../constants/categories';
import Button from '../../components/ui/Button';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif">Our Collection</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={selectedCategory === 'all'}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="ml-2">All Categories</span>
              </label>
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-pink-600 focus:ring-pink-500"
                  />
                  <span className="ml-2">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹0</span>
                <span>₹10,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product cards will be mapped here */}
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-80 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}