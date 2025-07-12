import React from 'react';
import logo from '../assets/favicon.png'; // Adjust the path if needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-20 border-t">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding and Description */}
        <div>
          <div className="flex items-center mb-3">
            <img src='src/assets/favicon.png' alt="Rentitnow logo" className="w-8 h-8 rounded" />
            <span className="ml-2 font-semibold text-lg">Rentitnow</span>
          </div>
          <p className="text-sm text-gray-500">
            We like working with positive folks and taking an optimistic approach to challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick links</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">About Rentitnow</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Investors Relationship</a></li>
          </ul>
        </div>

        {/* Terms & Settings */}
        <div>
          <h4 className="font-semibold mb-4">Terms & Settings</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">Privacy & cookies</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Partner dispute</a></li>
            <li><a href="#">Human right statement</a></li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="font-semibold mb-4">Partners</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">Extranet Login</a></li>
            <li><a href="#">Partner Help</a></li>
            <li><a href="#">List your property</a></li>
            <li><a href="#">Become an affiliate</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-10 md:mt-14 max-w-lg">
        <h4 className="font-semibold mb-3">Subscribe to Our Newsletter</h4>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-blue-700 text-white py-2 rounded text-sm font-semibold"
          >
            Subscribe
          </button>
          <label className="flex items-center text-xs text-gray-500 mt-1">
            <input type="checkbox" className="mr-2" />
            I agree to my email being stored and used to receive the newsletter.
          </label>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col md:flex-row justify-between text-xs text-gray-400 border-t pt-4">
        <span>© 2025 Rentitnownow. All Rights Reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
