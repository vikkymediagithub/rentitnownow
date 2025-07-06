import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Congratulations: React.FC = () => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            {/* Congratulations Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Congratulations!</h1>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              You have successfully submitted your property for review and 
              publishing. Please be patient while we review and verify your 
              property within 24hours. You will receive a notification as soon 
              as it is successfully reviewed and published.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Save for later
              </Link>
              <Link
                to="/"
                className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                Submit for review and publishing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Congratulations;