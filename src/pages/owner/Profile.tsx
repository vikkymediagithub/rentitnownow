import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Camera, Save, Wallet } from 'lucide-react';
import profileImage from '../../assets/profile.png';
import rateImage from '../../assets/rate.png';
import calenderImage from '../../assets/calender.png';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  onNavigate: (page: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: 'Osas',
    lastName: 'Okunbor',
    email: 'osas@realestate.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    bio: 'Experienced property manager with over 5 years in the real estate industry. Specializing in luxury apartments and commercial properties.',
    company: 'RealEstate.com',
    website: 'www.realestate.com'
  });

  const bookings = [
    { id: 1, name: "Apartment A", date: "2025-07-15", status: "Completed" },
    { id: 2, name: "Apartment B", date: "2025-07-12", status: "Pending" },
  ];

  const payments = [
    { id: 1, amount: "₦50,000", date: "2025-07-10", status: "Successful" },
    { id: 2, amount: "₦30,000", date: "2025-07-05", status: "Failed" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Handle form submission
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center mb-8 animate__animated animate__fadeIn">
            <button
              onClick={() => navigate('/owner/owner-dashboard')}
              className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Profile Settings</h1>
          </div>
          <div className="p-6 bg-gray-50">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white p-4 rounded-xl shadow-md animate__animated animate__fadeInUp">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm sm:text-base">Total Balance</p>
                  <Wallet className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">₦250,000</h2>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm sm:text-base">764675768799800</p>
                  </div>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-1s">
                <img src={calenderImage} alt="Calendar" className="w-12 h-12" />
                <h3 className="text-lg sm:text-xl font-bold mt-2">25</h3>
                <p className="text-gray-500 text-sm sm:text-base">Total Bookings</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-2s">
                <img src={rateImage} alt="Rating" className="w-12 h-12" />
                <h3 className="text-lg sm:text-xl font-bold mt-2">4.45</h3>
                <p className="text-gray-500 text-sm sm:text-base">Average Rating</p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Card */}
              <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md animate__animated animate__fadeInLeft">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">Osas Funmilola</h3>
                    <p className="text-gray-500 text-sm sm:text-base">osas@example.com</p>
                    <span className="text-green-600 text-xs sm:text-sm font-semibold">Verified ✅</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-sm sm:text-base text-gray-700 space-y-2">
                  <p><span className="font-semibold">First Name:</span> Osas</p>
                  <p><span className="font-semibold">Middle Name:</span> Osas</p>
                  <p><span className="font-semibold">Last Name:</span> Funmilola</p>
                  <p><span className="font-semibold">Email Address:</span> osas@example.com</p>
                  <p><span className="font-semibold">Phone:</span> +234 813 000 0000</p>
                  <p><span className="font-semibold">NIN:</span> 12345678901 ✅</p>
                  <p><span className="font-semibold">Passport:</span> A01234567 ✅</p>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <button className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                    Edit Profile
                  </button>
                  <button className="rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold border border-gray-200 hover:bg-gray-100 transition-colors px-6 py-2 text-sm sm:text-base">
                    Logout
                  </button>
                </div>
              </div>

              {/* Bookings & Payments */}
              <div className="md:col-span-2 space-y-6">
                {/* My Bookings */}
                <div className="bg-white p-6 rounded-xl shadow-md animate__animated animate__fadeInRight">
                  <h4 className="text-lg sm:text-xl font-bold mb-6">My Bookings</h4>
                  <div className="space-y-3 mb-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex justify-between items-center border-b pb-2 mb-10 animate__animated animate__fadeIn">
                        <div>
                          <p className="font-semibold text-sm sm:text-base">{booking.name}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{booking.date}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                            booking.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payments */}
                <div className="bg-white p-6 rounded-xl shadow-md animate__animated animate__fadeInRight animate__delay-1s">
                  <h4 className="text-lg sm:text-xl font-bold mb-6">Payments</h4>
                  <div className="space-y-3">
                    {payments.map((payment) => (
                      <div key={payment.id} className="flex justify-between items-center border-b pb-2 mb-10 animate__animated animate__fadeIn">
                        <div>
                          <p className="font-semibold text-sm sm:text-base">{payment.amount}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{payment.date}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                            payment.status === "Successful"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;