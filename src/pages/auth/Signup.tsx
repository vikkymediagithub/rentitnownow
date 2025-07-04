import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState('guest');

  const handleRoleSwitch = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <img src="/public/favicon.png" alt="logo" />
              </div>
              <span className="text-xl font-bold text-gray-900">Rentitnownow.com</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded flex items-center justify-center">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Role Selection */}
      <div className="flex justify-center items-center text-sm text-gray-800">
        <div className="w-full max-w-3xl flex flex-col my-10">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[450px] text-center space-y-1">
              <h1 className="text-3xl font-bold">Create Your Account Now</h1>
              <p className="text-sm">Join thousands of users on Rentitnownow</p>
            </div>

            <div className="w-full max-w-[450px] flex justify-center gap-2 my-6">
              <div
                className={`text-center py-6 px-8 bg-white rounded-lg cursor-pointer hover:shadow ${role === 'guest' ? 'shadow border border-blue-500' : ''}`}
                onClick={() => handleRoleSwitch('guest')}
              >
                <img src="/public/stash_user-id-light.png" alt="Guest" className="mx-auto" />
                <h3 className="font-semibold">I am a Guest</h3>
                <p className="font-light">Looking for a place to stay</p>
                {role === 'guest' && (
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-[#3d95ae] bg-[#c5f2ff] rounded-full">
                    Selected
                  </span>
                )}
              </div>

              <div
                className={`text-center py-6 px-8 bg-white rounded-lg cursor-pointer hover:shadow ${role === 'owner' ? 'shadow border border-blue-500' : ''}`}
                onClick={() => handleRoleSwitch('owner')}
              >
                <img src="/public/solar_home-line-duotone.png" alt="Owner" className="mx-auto" />
                <h3 className="font-semibold">I'm a Property Owner</h3>
                <p className="font-light">Looking to list my property</p>
                {role === 'owner' && (
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-[#3d95ae] bg-[#c5f2ff] rounded-full">
                    Selected
                  </span>
                )}
              </div>
            </div>
          </div>

          {role === 'guest' ? <GuestForm /> : <OwnerForm />}
        </div>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div className="space-y-1">
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-gray-400 p-2 w-full text-sm border-2 border-gray-300 rounded-lg"
      />
    </div>
  );
}

function PhoneInputField({ label }) {
  const [countryCode, setCountryCode] = useState('+234');

  return (
    <div className="space-y-1">
      <p>{label}</p>
      <div className="relative w-full">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="absolute left-0 top-0 h-full bg-transparent pl-2 pr-8 border-r border-gray-300 text-sm appearance-none z-10"
        >
          <option value="+234">🇳🇬 +234</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+81">🇯🇵 +81</option>
        </select>
        <input
          type="tel"
          placeholder="Phone number"
          className="pl-28 p-2 w-full text-sm border-2 border-gray-300 rounded-lg outline-gray-400"
        />
      </div>
    </div>
  );
}

function GuestForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[650px] grid gap-2 bg-white p-8">
        <h2 className="font-semibold text-xl pb-4">Registration Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="First Name" placeholder="Enter first name" />
          <InputField label="Last Name" placeholder="Enter last name" />
          <InputField label="Email address" placeholder="email@sample.com" />
          <PhoneInputField label="Phone number" />
          <InputField label="Create Password" placeholder="**********" type="password" />
          <InputField label="Confirm Password" placeholder="**********" type="password" />
          <InputField label="Location(State, City)" placeholder="Where are you planning to stay" />
          <InputField label="National Identification Number (NIN)" placeholder="Enter NIN" />
        </div>
        <p className="text-blue-600 text-sm bg-orange-50 border border-orange-200 py-2 pl-3 rounded-xl">
          By registering, you agree to our Terms of service and Privacy Policy.
        </p>
        <button className="w-full mt-4 border rounded-lg bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white py-2 hover:from-[#c7323a] hover:to-[#1f3a84]">
          Create Guest Account
        </button>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:text-red-800 font-medium hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function OwnerForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[650px] grid gap-2 bg-white p-8">
        <h2 className="font-semibold text-xl pb-4">Registration Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="First Name" placeholder="Enter first name" />
          <InputField label="Last Name" placeholder="Enter last name" />
          <InputField label="Email address" placeholder="email@sample.com" />
          <PhoneInputField label="Phone number" />
          <InputField label="Create Password" placeholder="***********" type="password" />
          <InputField label="Confirm Password" placeholder="**********" type="password" />
          <InputField label="Location(State, City)" placeholder="Where are you planning to stay" />
          <InputField label="Address" placeholder="Enter your address" />
        </div>
      </div>

      <div className="relative w-full max-w-[650px] grid gap-2 bg-white p-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="National Identification Number (NIN)" placeholder="Enter NIN" />
          <div className="space-y-1 relative">
            <p>Upload NIN ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="submit" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="Valid ID (E.g, Passport, Driver’s Licence)" placeholder="Enter ID name" />
          <div className="space-y-1 relative">
            <p>Upload ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="submit" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='border-blue-100 border-2 rounded-lg bg-blue-50 p-2'>
            By registering, you agree to our Terms of Service and Privacy Policy. As a property owner, you will receive a notification within 24hrs and be able to list and manage your properties after verification.
          </div>
          <div className='bg-blue-400 mt-5 rounded-lg'>
            <p className='text-white text-center py-2'>Create Your Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
