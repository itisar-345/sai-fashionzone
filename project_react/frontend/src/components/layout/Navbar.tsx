import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Menu, X, Search } from 'lucide-react';
import Button from '../ui/Button';
import { useAuthStore } from '../../store/auth';
import { useCartStore } from '../../store/cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <Link to="/" className="text-2xl font-serif ml-2 text-pink-600">
              SaiFashionZone
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-600">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-pink-600">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-600">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-6 w-6 text-gray-600" />
            </button>
            <Link to="/wishlist" className="p-2">
              <Heart className="h-6 w-6 text-gray-600" />
            </Link>
            <Link to="/cart" className="p-2 relative">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {user?.role === 'admin' && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">Admin</Button>
                  </Link>
                )}
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="primary" size="sm" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-pink-50">Home</Link>
            <Link to="/shop" className="block px-3 py-2 text-gray-600 hover:bg-pink-50">Shop</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-pink-50">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-pink-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}