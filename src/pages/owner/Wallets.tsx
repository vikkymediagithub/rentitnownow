import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';
import 'animate.css';

const Wallet: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  // Sample transactions data
  const transactions = [
    { id: 1, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN 75,000', status: 'Successful' },
    { id: 2, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN 75,000', status: 'Successful' },
    { id: 3, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN 75,000', status: 'Successful' },
  ];

  // Filter transactions based on selected status
  const filteredTransactions = filter === 'all' ? transactions : transactions.filter(t => t.status === filter);

  // Get status badge styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Successful':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Initialize lucide-react icons
  useEffect(() => {
    import('lucide-react').then((lucide) => {
      lucide.createIcons();
    });
  }, []);

  return (
    <div className="bg-white p-4 min-h-screen sm:p-6 md:p-8">
      {/* Header with Back Arrow, Wallet Title, and Icon */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeIn">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 animate__animated animate__fadeIn"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold">Wallet</h1>
          </div>
          <span
            className="inline-flex items-center justify-center w-8 h-8"
            style={{
              background: 'linear-gradient(to right, #F85259, #3352A5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            <BookOpen className="w-6 h-6" />
          </span>
        </div>
      </div>

      {/* Balance and Actions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-red-500 to-blue-700 text-white p-4 px-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm">Total Balance</p>
              <h2 className="text-2xl sm:text-3xl font-bold">₦250,000</h2>
              <p className="text-xs sm:text-sm">764675768799800</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <p className="text-xs">+4.7%</p>
              <button className="mt-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">Withdraw</button>
            </div>
          </div>
        </div>

        {/* Actions Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
              Deposit
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition duration-300">
              Transfer
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition duration-300">
              View Statements
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md animate__animated animate__slideInUp">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">Transaction History</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {['all', 'Successful'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`text-sm font-medium px-3 py-1 rounded-full bg-gray-200 transition duration-300 animate__animated animate__pulse animate__delay-1s ${
                  filter === option
                    ? 'bg-gradient-to-r from-[#F85259] to-[#3352A5] text-transparent bg-clip-text'
                    : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                {option === 'all' ? 'All' : 'Successful'}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-3">
                <div>
                  <p className="text-gray-700 text-sm sm:text-base">{transaction.description}</p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-500 text-sm sm:text-base">{transaction.date}</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <p className="text-gray-700 font-medium text-sm sm:text-base">{transaction.amount}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${getStatusStyles(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;