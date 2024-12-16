import React from 'react';
import { ProductList } from './ProductList';
import { ProductFilters } from './ProductFilters';
import Button from '../../../components/ui/Button';
import { Plus } from 'lucide-react';

export function ProductsManager() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif">Products Management</h1>
        <Button variant="primary" className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </Button>
      </div>
      <ProductFilters />
      <ProductList />
    </div>
  );
}