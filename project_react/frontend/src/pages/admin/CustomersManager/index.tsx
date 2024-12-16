import React from 'react';
import { CustomerList } from './CustomerList';
import { CustomerFilters } from './CustomerFilters';

export function CustomersManager() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-8">Customers Management</h1>
      <CustomerFilters />
      <CustomerList />
    </div>
  );
}