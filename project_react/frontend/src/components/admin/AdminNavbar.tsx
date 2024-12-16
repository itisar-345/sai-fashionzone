import React from 'react';
import { LogOut, Bell } from 'lucide-react';
import { useAuthStore } from '../../store/auth';
import Button from '../ui/Button';

export function AdminNavbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif text-xl text-pink-600">
            SaiFashionZone Admin
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user?.name}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={logout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}