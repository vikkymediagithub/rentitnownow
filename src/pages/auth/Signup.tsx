import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import guestImage from '../../assets/stash_user-id-light.png';
import ownerImage from '../../assets/solar_home-line-duotone.png';

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
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
                R
              </div>
              <p className="font-semibold text-sm">Rentitnownow.com</p>
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
                <img src={guestImage} alt="Guest" className="mx-auto" />
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
                <img src={ownerImage} alt="Owner" className="mx-auto" />
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

// Reusable Input Field
function InputField({ label, placeholder, type = 'text', value, onChange, name }) {
  return (
    <div className="space-y-1">
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="outline-gray-400 p-2 w-full text-sm border-2 border-gray-300 rounded-lg"
      />
    </div>
  );
}

// Phone Input Field
function PhoneInputField({ label, phone, setPhone }) {
  const [countryCode, setCountryCode] = useState('+234');
  const [rawPhone, setRawPhone] = useState('');

  useEffect(() => {
    setPhone(`${countryCode}${rawPhone}`);
  }, [countryCode, rawPhone, setPhone]);

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
          value={rawPhone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, '');
            setRawPhone(digits);
          }}
          className="pl-28 p-2 w-full text-sm border-2 border-gray-300 rounded-lg outline-gray-400"
        />
      </div>
    </div>
  );
}


function GuestForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
    location: '', nin: ''
  });
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuestSubmit = async () => {
    try {
      const payload = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: phone,
        password: form.password,
        password_confirmation: form.confirmPassword,
        location: form.location,
        nin: form.nin,
        role: 'guest'
      };

      console.log("📦 Sending payload:", payload);

      const response = await axios.post(
        'https://rentitnownow.com/api/v1/auth/register',
        payload
      );

      console.log("✅ Success response:", response.data);
      toast.success("Guest account created successfully!");
      navigate('/login');
    } catch (error) {
      const serverErrors = error?.response?.data?.errors;

      // Show specific field error if available
      if (serverErrors?.email?.length) {
        toast.error(`Email: ${serverErrors.email[0]}`);
      } else if (serverErrors?.phone?.length) {
        toast.error(`Phone: ${serverErrors.phone[0]}`);
      } else {
        toast.error(error?.response?.data?.message || "Registration failed.");
      }

      console.error("❌ Error response from server:", error?.response?.data);
    }
  };





  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[650px] grid gap-2 bg-white p-8">
        <h2 className="font-semibold text-xl pb-4">Registration Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField name="firstName" label="First Name" placeholder="Enter first name" value={form.firstName} onChange={handleChange} />
          <InputField name="lastName" label="Last Name" placeholder="Enter last name" value={form.lastName} onChange={handleChange} />
          <InputField name="email" label="Email address" placeholder="email@sample.com" value={form.email} onChange={handleChange} />
          <PhoneInputField label="Phone number" phone={phone} setPhone={setPhone} />
          <InputField name="password" label="Create Password" type="password" placeholder="**********" value={form.password} onChange={handleChange} />
          <InputField name="confirmPassword" label="Confirm Password" type="password" placeholder="**********" value={form.confirmPassword} onChange={handleChange} />
          <InputField name="location" label="Location(State, City)" placeholder="Where are you planning to stay" value={form.location} onChange={handleChange} />
          <InputField name="nin" label="National Identification Number (NIN)" placeholder="Enter NIN" value={form.nin} onChange={handleChange} />
        </div>
        <p className="text-blue-600 text-sm bg-orange-50 border border-orange-200 py-2 pl-3 rounded-xl">
          By registering, you agree to our Terms of service and Privacy Policy.
        </p>
        <button
          onClick={handleGuestSubmit}
          className="w-full mt-4 border rounded-lg bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white py-2 hover:from-[#c7323a] hover:to-[#1f3a84]"
        >
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
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
    location: '', address: '', nin: '', idName: ''
  });
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOwnerSubmit = async () => {
  try {
    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: phone, // assuming phone is from a separate input
      password: form.password,
      password_confirmation: form.confirmPassword,
      role: 'owner',
    };

    console.log("📦 Sending OWNER payload:", payload);

    const response = await axios.post(
      'https://rentitnownow.com/api/v1/auth/register',
      payload
    );

    console.log("✅ Success response:", response.data);
    toast.success("Owner account created successfully!");
    navigate('/login');
  } catch (error) {
    console.error("❌ Error response from server:", error?.response?.data);
    toast.error(error?.response?.data?.message || "Owner registration failed.");
  }
};


  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[650px] grid gap-2 bg-white p-8">
        <h2 className="font-semibold text-xl pb-4">Registration Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField name="firstName" label="First Name" placeholder="Enter first name" value={form.firstName} onChange={handleChange} />
          <InputField name="lastName" label="Last Name" placeholder="Enter last name" value={form.lastName} onChange={handleChange} />
          <InputField name="email" label="Email address" placeholder="email@sample.com" value={form.email} onChange={handleChange} />
          <PhoneInputField label="Phone number" phone={phone} setPhone={setPhone} />
          <InputField name="password" label="Create Password" type="password" placeholder="**********" value={form.password} onChange={handleChange} />
          <InputField name="confirmPassword" label="Confirm Password" type="password" placeholder="**********" value={form.confirmPassword} onChange={handleChange} />
          <InputField name="location" label="Location(State, City)" placeholder="Where are you planning to stay" value={form.location} onChange={handleChange} />
          <InputField name="address" label="Address" placeholder="Enter your address" value={form.address} onChange={handleChange} />
        </div>
      </div>

      <div className="relative w-full max-w-[650px] grid gap-2 bg-white p-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField name="nin" label="National Identification Number (NIN)" placeholder="Enter NIN" value={form.nin} onChange={handleChange} />
          <div className="space-y-1 relative">
            <p>Upload NIN ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="button" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          <InputField name="idName" label="Valid ID (E.g, Passport, Driver’s Licence)" placeholder="Enter ID name" value={form.idName} onChange={handleChange} />
          <div className="space-y-1 relative">
            <p>Upload ID <sub>(PDF,JPG,PNG)</sub></p>
            <input type="file" className="p-2 w-full text-sm border-2 border-gray-300 rounded-lg" />
            <button type="button" className="bg-blue-400 text-white absolute px-3 py-1 rounded-lg right-2 top-7">Upload</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='border-blue-100 border-2 rounded-lg bg-blue-50 p-2'>
            By registering, you agree to our Terms of Service and Privacy Policy. As a property owner, you will receive a notification within 24hrs and be able to list and manage your properties after verification.
          </div>
          <button
            onClick={handleOwnerSubmit}
            className='bg-blue-400 mt-5 rounded-lg text-white text-center py-2'
          >
            Create Your Account
          </button>
        </div>
      </div>
    </div>
  );
}
