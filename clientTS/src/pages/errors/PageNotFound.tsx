import React from 'react';
import { Frown, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound:React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full space-y-6">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-6 inline-block">
            <Frown className="text-red-500" size={80} strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          We couldn't find the page you're looking for. It seems our furry friends might have run off with it!
        </p>
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            <Home size={20} />
            Return to Home
          </Link>
        </div>
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@petcare.com" className="text-blue-500 hover:underline">
              support.whiskr@kiruiallan.me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;