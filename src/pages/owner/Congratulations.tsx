import React from 'react';
import { Link } from 'react-router-dom';
import CheckImage from '../../assets/congratulation.png';

const Congratulations: React.FC = () => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src={CheckImage} className="" />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Congratulations!</h1>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              You have successfully submitted your property for review and publishing.
              Please be patient while we review and verify your property within 24 hours.
              You will receive a notification as soon as it is successfully reviewed and published.
            </p>

            {/* Buttons Side-by-Side */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-3 sm:space-y-0">
              <Link
                to="/"
                className="w-full sm:w-auto py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm text-center"
              >
                Save for later
              </Link>
              <Link
                to="/owner/dashboard"
                className="w-full sm:w-auto py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium text-sm text-center"
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