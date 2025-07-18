import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics: React.FC = () => {
  // Revenue Chart Data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 200, 300, 500, 700, 1000, 1300, 1500, 1700, 1900, 2100, 2500],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Profile Visit Chart Data
  const profileVisitData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Profile Visits',
        data: [200, 400, 300, 100, 500, 300, 400],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Second Revenue Chart Data (smaller one)
  const secondaryRevenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2nd Revenue',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Total Revenue</h1>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <span className="flex items-center"><span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span> All time</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Rentable</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span> Properties</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span> Vehicles</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span> Tools & equipment</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span> Electronics</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold">2,000,000</h2>
        <div className="flex space-x-4 text-lg">
          <span>300</span>
          <span>19</span>
          <span>2</span>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <select className="border rounded p-1">
            <option>Monthly</option>
          </select>
        </div>
        <div className="h-64">
          <Line data={revenueData} options={options} />
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Profile visit</h2>
            <select className="border rounded p-1">
              <option>This week</option>
            </select>
          </div>
          <div className="h-48">
            <Bar data={profileVisitData} options={options} />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="h-64">
            <Line data={secondaryRevenueData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;