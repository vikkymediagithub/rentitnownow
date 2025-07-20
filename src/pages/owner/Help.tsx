import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, BookOpen, ChevronDown } from 'lucide-react';
import 'animate.css';

const Help: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Sample help items data (FAQs and support tickets)
  const helpItems = [
    { id: 1, title: 'How do I book a property?', description: 'To book a property, navigate to the Bookings page, select your desired property, choose your dates, and confirm the payment. Ensure your account is verified for a smooth process.', date: 'Dec 10, 2025', category: 'FAQs' },
    { id: 2, title: 'Payment issue', description: 'If you encounter a payment issue, check your payment method details in Settings. Contact support if the issue persists.', date: 'Dec 10, 2025', category: 'Tickets', status: 'Open' },
    { id: 3, title: 'How to cancel a booking?', description: 'Go to the Bookings page, select the booking you wish to cancel, and click "Cancel Booking." Refunds are processed based on the property’s cancellation policy.', date: 'Dec 10, 2025', category: 'FAQs' },
    { id: 4, title: 'Account verification', description: 'If you haven’t received the verification email, check your spam folder or request a new email from the Settings page.', date: 'Dec 10, 2025', category: 'Tickets', status: 'Resolved' },
  ];

  // Filter help items based on selected category
  const filteredHelpItems = filter === 'all' ? helpItems : helpItems.filter(item => item.category === filter);

  // Get category/status badge styles
  const getCategoryStyles = (category: string, status?: string) => {
    if (category === 'Tickets' && status) {
      switch (status) {
        case 'Open':
          return 'bg-red-100 text-red-800';
        case 'Resolved':
          return 'bg-green-100 text-green-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    }
    return category === 'FAQs' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800';
  };

  // Toggle accordion item
  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Initialize lucide-react icons
  useEffect(() => {
    import('lucide-react').then((lucide) => {
      lucide.createIcons();
    });
  }, []);

  return (
    <div className="bg-white p-4 min-h-screen sm:p-6 md:p-8">
      {/* Header with Back Arrow, Help Title, and Icon */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeIn">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 animate__animated animate__fadeIn"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold">Help</h1>
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

      {/* Support and Quick Links Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Support Contact Card */}
        <div className="bg-gradient-to-r from-red-500 to-blue-700 text-white p-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm">Support Contact</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
              <p className="text-xs sm:text-sm">support@example.com | +234 123 456 7890</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <button className="mt-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                Chat with Support
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
              Submit a Ticket
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition duration-300">
              View Knowledge Base
            </button>
          </div>
        </div>
      </div>

      {/* Help Accordion */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md animate__animated animate__slideInUp">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">Help Center</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {['all', 'FAQs', 'Tickets'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`text-sm font-medium px-3 py-1 rounded-full bg-gray-200 transition duration-300 animate__animated animate__pulse animate__delay-1s ${
                  filter === option
                    ? 'bg-gradient-to-r from-[#F85259] to-[#3352A5] text-transparent bg-clip-text'
                    : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                {option === 'all' ? 'All' : option}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {filteredHelpItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg animate__animated animate__fadeInUp">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 text-left"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-3">
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">{item.title}</p>
                    <div className="flex items-center space-x-2">
                     <Calendar className="w-5 h-5 text-gray-500" />
                      <p className="text-gray-500 text-sm sm:text-base">{item.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-sm ${getCategoryStyles(item.category, item.status)}`}>
                    {item.status || item.category}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {expandedId === item.id && (
                <div className="p-4 bg-gray-50 text-gray-600 text-sm sm:text-base border-t border-gray-200 animate__animated animate__fadeIn">
                  {item.description}
                  <div className="mt-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
                      {item.category === 'FAQs' ? 'Read More' : 'View Ticket'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;