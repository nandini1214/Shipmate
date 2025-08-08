// import { Truck, Phone, Mail, Globe, Facebook, Instagram, Twitter } from "lucide-react";

import { Facebook, Globe, Instagram, Mail, Phone, Truck, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">QuickDeliver</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India’s most trusted delivery platform. Efficient. Secure. Fast.
            </p>
          </div>

          {/* Delivery Partners */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">For Delivery Partners</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Sign Up", "Partner App", "Requirements", "Earnings"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["About Us", "Careers", "Support", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@quickdeliver.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>www.quickdeliver.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <Facebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400">
            <Twitter />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 QuickDeliver. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
