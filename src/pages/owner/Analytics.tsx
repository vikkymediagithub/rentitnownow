import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'animate.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
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

  // Pie Chart Data
  const pieData = {
    labels: ['Rentable', 'Properties', 'Vehicles'],
    datasets: [
      {
        data: [300, 19, 2],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
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

  // Second Line Chart Data
  const secondLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Secondary Revenue',
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
    <div className="p-4 bg-gray-100 min-h-screen animate__animated animate__bounceIn">

      {/* Revenue Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 animate__animated animate__zoomIn">
        <div className="bg-white p-4 rounded shadow text-center">
         <h1 className="text-xl font-extralight mb-9">Total Revenue</h1>
          <h2 className="text-2xl font-bold">2,000,000</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <span className="text-gray-500">All time</span>
          <h2 className="text-2xl font-bold mt-9">300</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <span className="text-orange-500 mr-1">⬤</span> All Rentable
          <h2 className="text-2xl font-bold mt-9">300</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <span className="text-blue-500 mr-1">🏠</span> Properties
          <h2 className="text-2xl font-bold mt-9">19</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <span className="text-purple-500 mr-1">🚗</span> Vehicles
          <h2 className="text-2xl font-bold mt-9">2</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <span className="text-red-500 mr-1">🛠️</span> Tools & equipment
          <h2 className="text-2xl font-bold mt-9">0</h2>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column (Pie and Line) */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow animate__animated animate__slideInLeft">
            <div className="h-64">
              <Pie data={pieData} options={options} />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow animate__animated animate__slideInLeft">
            <div className="h-64">
              <Line data={revenueData} options={options} />
            </div>
          </div>
        </div>

        {/* Right Column (Bar and Second Line) */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow animate__animated animate__slideInRight">
            <div className="h-64">
              <Bar data={barData} options={options} />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow animate__animated animate__slideInRight">
            <div className="h-64">
              <Line data={secondLineData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;