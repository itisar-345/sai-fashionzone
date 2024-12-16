import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  Settings 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/admin' },
  { icon: ShoppingBag, label: 'Products', to: '/admin/products' },
  { icon: Package, label: 'Orders', to: '/admin/orders' },
  { icon: Users, label: 'Customers', to: '/admin/customers' },
  { icon: Settings, label: 'Settings', to: '/admin/settings' },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-pink-50 text-pink-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}