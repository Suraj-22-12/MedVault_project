
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-[#0a2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">MedVault</span>
            </div>
            <p className="text-gray-300 dark:text-gray-200 mb-6 max-w-md">
              Your trusted partner in healthcare management. Providing secure, 
              efficient, and user-friendly solutions for patients and healthcare providers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="text-sm">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Appointments
                </button>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 dark:text-gray-200">
                📧 info@medvault.com
              </li>
              <li className="text-gray-300 dark:text-gray-200">
                📞 +1 (555) 123-4567
              </li>
              <li className="text-gray-300 dark:text-gray-200">
                📍 123 Healthcare St,<br />Medical District, MD 12345
              </li>
              <li className="text-gray-300 dark:text-gray-200">
                🕒 24/7 Support Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 dark:text-gray-200 text-sm">
              © {currentYear} MedVault. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
