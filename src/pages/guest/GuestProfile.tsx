import React from 'react';
import Navbar from './Components/Navbar';
import { ArrowLeft } from 'lucide-react';
import Profilecard from './Components/Profilecard';
import ProfileSidebar from './Components/ProfileSidebar';
import PersonalInformationCard from './Components/PersonalInformationCard';
import RecentBookingSection from './Components/RecentBookingSection';
import FavouriteProperty from './Components/FavouriteProperty';
import Footer from './Components/Footer';
import ActivitySection from './Components/ActivitySection';

const GuestProfile = () => {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Back button */}
      <div className="px-4 sm:px-10 mt-6">
        <button className="flex items-center space-x-2 text-sm text-black hover:underline">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
          <span className="text-xl font-semibold">Profile</span>
        </button>
      </div>

      {/* Profile Info and Sidebar grouped */}
      <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-10 mt-10  ">
        {/* Left Group: Profile Card & Sidebar */}
        <div className="flex flex-col gap-6 items-center md:items-start w-full md:max-w-xs">
          <Profilecard />
          <ProfileSidebar />
        </div>

        {/* Right Group: Personal Info and Bookings */}
        <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
          <PersonalInformationCard />
         <RecentBookingSection/>
         <FavouriteProperty />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuestProfile;
