import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">About Us</h3>
            <p className="text-gray-600">
              Handmade jewelry crafted with love and attention to detail.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: hello@handmadelove.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Jewelry Lane</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 Handmade Love. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}