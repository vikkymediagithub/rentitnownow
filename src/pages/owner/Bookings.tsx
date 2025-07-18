import React from 'react';
import { Link } from 'react-router-dom';
import CheckImage from '../../assets/congratulation.png';

const Bookings: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <div className="flex space-x-4">
          <span className="text-blue-500 cursor-pointer">All</span>
          <span className="text-blue-500 cursor-pointer">Pending</span>
          <span className="text-blue-500 cursor-pointer">Confirmed</span>
          <span className="text-blue-500 cursor-pointer">Completed</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Adedayo O.</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Confirmed</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Ruth Omoowo</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Eleho Itazi</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Faith Omotoro</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Eleho Itazi</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Faith Omotoro</h3>
              <p className="text-gray-600">Modern Shortlist Muse 2</p>
              <p className="text-gray-600">Dec 10 - 11, 2025</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span>
            <span className="text-gray-500">NGN/000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;