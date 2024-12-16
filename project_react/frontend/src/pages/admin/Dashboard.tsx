import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp 
} from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    label: 'Total Revenue',
    value: '₹1,23,456',
    trend: '+12.5%',
  },
  {
    icon: ShoppingBag,
    label: 'Total Orders',
    value: '156',
    trend: '+8.2%',
  },
  {
    icon: Users,
    label: 'Total Customers',
    value: '2,450',
    trend: '+15.3%',
  },
  {
    icon: TrendingUp,
    label: 'Conversion Rate',
    value: '3.2%',
    trend: '+2.1%',
  },
];

export function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-pink-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-pink-600" />
              </div>
              <span className="text-green-500 text-sm">{stat.trend}</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard components here */}
    </div>
  );
}