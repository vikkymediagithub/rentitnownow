import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Wallet: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const transactions = [
    { id: 1, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN75,000', status: 'Successful' },
    { id: 2, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN75,000', status: 'Successful' },
    { id: 3, description: 'Booking payment from Oluwole Olashegun', date: 'Dec 10, 2025', amount: 'NGN75,000', status: 'Successful' },
  ];

  const filteredTransactions = filter === 'all' ? transactions : transactions.filter(t => t.status === filter);

  return (
    <div className="p-4 bg-gray-100 min-h-screen animate__animated animate__fadeIn">
      <div className="flex items-center mb-6">
        <Link to="/" className="text-blue-500 mr-4">← Back</Link>
        <h1 className="text-xl font-bold">Wallet</h1>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-red-500 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-6 animate__animated animate__bounceIn">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Total Balance</p>
            <h2 className="text-3xl font-bold">₦250,000</h2>
            <p className="text-sm">764675768799800</p>
          </div>
          <div className="text-right">
            <p className="text-xs">+4.7%</p>
            <button className="mt-2 bg-white text-blue-700 px-4 py-2 rounded-lg">Withdraw</button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-4 rounded-lg shadow animate__animated animate__slideInUp">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transaction History</h2>
          <button
            className="border rounded px-2 py-1 text-purple-500 hover:bg-purple-100"
            onClick={() => setFilter(filter === 'all' ? 'Successful' : 'all')}
          >
            ≡ {filter === 'all' ? 'All' : 'Successful'}
          </button>
        </div>
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-700">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-700">{transaction.amount}</p>
                <p className="text-sm text-green-500">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;