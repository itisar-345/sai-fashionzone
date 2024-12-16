import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">SaiFashionZone</h3>
            <p className="text-gray-400">
              Your destination for traditional and modern fashion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400">Sarees</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400">Girls Wear</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400">Boys Wear</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400">Ganzy Collection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@saifashionzone.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Fashion Street, Mumbai
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 SaiFashionZone by Raiba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}