import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [role, setRole] = useState('guest');

  const handleRoleSwitch = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      {/* Header */}
      <header className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-2 flex justify-between py-6">
          <div className="flex gap-1 items-center">
            <p className="px-3 py-1 font-semibold bg-gradient-to-r from-[#F85259] to-[#3352A5] rounded-lg text-white">R</p>
            <p className="font-semibold text-sm">Rentitnownow.com</p>
          </div>

          <div className="rounded-lg py-2 px-2 bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white flex gap-1">
            <img src="/Vector.png" alt="" className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Account Role Selection */}
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
                <img src="/public/stash_user-id-light.png" alt="" className="mx-auto" />
                <h3 className="font-semibold">I am a Guest</h3>
                <p className="font-light">Looking for a place to stay</p>
              </div>
              <div
                className={`text-center py-6 px-8 bg-white rounded-lg cursor-pointer hover:shadow ${role === 'owner' ? 'shadow border border-blue-500' : ''}`}
                onClick={() => handleRoleSwitch('owner')}
              >
                <img src="/public/solar_home-line-duotone.png" alt="" className="mx-auto" />
                <h3 className="font-semibold">I'm a Property Owner</h3>
                <p className="font-light">Looking to list my property</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
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
      <input type={type} placeholder={placeholder} className="outline-gray-400 p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
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
          <InputField label="Phone number" placeholder="+234" />
          <InputField label="Create Password" placeholder="Create password" type="password" />
          <InputField label="Confirm Password" placeholder="Confirm password" type="password" />
          <InputField label="Location(State, City)" placeholder="Where are planning to stay" />
          <InputField label="National Identification Number (NIN)" placeholder="" />
        </div>

        <p className="text-blue-600 text-sm bg-orange-50 border border-orange-200 py-2 pl-3 rounded-xl">
          <span><i className="ri-error-warning-line"></i></span> By registering, you agree to our Terms of service and Privacy Policy.
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
          <InputField label="Phone number" placeholder="+234" />
          <InputField label="Create Password" placeholder="Create password" type="password" />
          <InputField label="Confirm Password" placeholder="Confirm password" type="password" />
          <InputField label="Location(State, City)" placeholder="Where are planning to stay" />
          <InputField label="Address" placeholder="" />
        </div>
      </div>

      <div className=" relative w-full max-w-[650px] grid gap-2 bg-white p-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="National Identification Number (NIN)" placeholder="" />
          <div className="space-y-1 relative">
            <p>Upload NIN ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="submit" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField label="Valid ID(E.g, Passport, Driver’s Licence)" placeholder="email@sample.com" />
          <div className="space-y-1 relative">
            <p>Upload ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="submit" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='border-blue-100 border-2 rounded-lg bg-blue-50'> <p className='p-2'>By registering, you agree to our Terms of Service and Privacy Policy. As a property owner, you will receive a notification between 24hrs and you will be able to list and manage your properties after verification.</p></div>
          <div className='bg-blue-400 mt-5 rounded-lg'>
            <p className='text-white text-center py-2'>Create Your Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
