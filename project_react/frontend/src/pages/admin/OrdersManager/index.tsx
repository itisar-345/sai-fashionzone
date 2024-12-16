import React from 'react';
import { OrderList } from './OrderList';
import { OrderFilters } from './OrderFilters';

export function OrdersManager() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-8">Orders Management</h1>
      <OrderFilters />
      <OrderList />
    </div>
  );
}