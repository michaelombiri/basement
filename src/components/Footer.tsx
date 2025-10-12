import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Basement</span>
                <span className="text-2xl font-bold text-amber-600"> Contractors</span>
                <div className="text-sm text-gray-400">Kenya</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building strong relationships by understanding and meeting clients’ needs on time and within budget 
              while maintaining high quality standards, conducting business honestly, maintaining clear communication, 
              and honoring commitments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Residential Construction</li>
              <li className="text-gray-400">Commercial Buildings</li>
              <li className="text-gray-400">Infrastructure Projects</li>
              <li className="text-gray-400">Dam Construction</li>
              <li className="text-gray-400">Road Construction</li>
              <li className="text-gray-400">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Vipingo, Kilifi County</p>
                  <p>Mbita, Homabay County</p>
                  <p>Awasi, Kisumu County</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+254 722 118 336</p>
                  <p>+254 737 340 174</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:basementcontra25@gmail.com" 
                  className="text-gray-400 hover:text-amber-600 transition-colors duration-300"
                >
                  basementcontra25@gmail.com
                </a>
                </div>
              </div>  
            </div>
            {/* Service Areas */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Service Areas</h4>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-400">
                <span>Nairobi</span>
                <span>Coast</span>
                <span>Rift Valley</span>
                <span>Eastern</span>
                <span>Central</span>
                <span>Western</span>
                <span>North Eastern</span>
                <span>Nyanza</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Basement Contractors Kenya. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">NCA Registered</span>
              <span className="text-gray-400">Tax Compliant</span>
              <span className="text-gray-400">Fully Licensed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
