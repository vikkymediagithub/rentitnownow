import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building, Home, Building2, MapPin, Wifi, Car, Utensils, Tv, Coffee, Waves, Upload, Calendar, Clock, ArrowRight } from 'lucide-react';

const AddProperty: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    rentalOption: '',
    propertyType: '',
    typeOfLease: '',
    description: '',
    state: '',
    cityTown: '',
    detailedAddress: '',
    googleMapLink: '',
    price: '',
    maximumGuest: '',
    numberOfBedrooms: 1,
    numberOfBathrooms: 1,
    selectedAmenities: [] as string[],
    propertyPhotos: [] as File[],
    propertyVideo: null as File | null,
    leasePeriod: 'daily',
    checkInTime: '',
    checkOutTime: '',
    houseRules: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleNumberChange = (field: 'numberOfBedrooms' | 'numberOfBathrooms', value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.max(1, value)
    }));
  };


  const validateField = (e) => {
  const { name, value } = e.target;
  if (!value.trim()) {
    setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
  }
};

  const handlePropertyTypeSelect = (selectedId) => {
  setFormData((prev) => ({
    ...prev,
    propertyType: selectedId,
  }));

  // Clear error if a valid selection is made
  if (selectedId) {
    setErrors((prev) => ({
      ...prev,
      propertyType: '',
    }));
  }
};

  

  const handleAmenityToggle = (amenityId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAmenities: prev.selectedAmenities.includes(amenityId)
        ? prev.selectedAmenities.filter(id => id !== amenityId)
        : [...prev.selectedAmenities, amenityId]
    }));
  };

  const handleFileUpload = (files: FileList | null, type: 'photos' | 'video') => {
    if (!files) return;
    
    if (type === 'photos') {
      const newPhotos = Array.from(files).filter(file => file.type.startsWith('image/'));
      setFormData(prev => ({
        ...prev,
        propertyPhotos: [...prev.propertyPhotos, ...newPhotos]
      }));
    } else if (type === 'video' && files[0]) {
      if (files[0].type.startsWith('video/')) {
        setFormData(prev => ({
          ...prev,
          propertyVideo: files[0]
        }));
      }
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      propertyPhotos: prev.propertyPhotos.filter((_, i) => i !== index)
    }));
  };

  const removeVideo = () => {
    setFormData(prev => ({
      ...prev,
      propertyVideo: null
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.rentalOption) {
      newErrors.rentalOption = 'Please select a rental option';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Property title is required';
    }
    
    if (!formData.typeOfLease) {
      newErrors.typeOfLease = 'Please select a type of lease';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Property description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.state) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.cityTown) {
      newErrors.cityTown = 'City/Town is required';
    }
    
    if (!formData.detailedAddress.trim()) {
      newErrors.detailedAddress = 'Detailed address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    }
    
    if (!formData.maximumGuest) {
      newErrors.maximumGuest = 'Maximum guest is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep5 = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.propertyPhotos.length === 0) {
      newErrors.propertyPhotos = 'At least one property photo is required';
    }
    
    if (!formData.checkInTime) {
      newErrors.checkInTime = 'Check-in time is required';
    }
    
    if (!formData.checkOutTime) {
      newErrors.checkOutTime = 'Check-out time is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else if (currentStep === 3) {
      isValid = validateStep3();
    } else if (currentStep === 4) {
      isValid = validateStep4();
    } else if (currentStep === 5) {
      isValid = validateStep5();
      if (isValid) {
        // Navigate to preview page with form data
         navigate('/owner/property-preview', { state: { formData } });
        return;
      }
    }
    
    if (isValid && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({}); // Clear errors when going back
    }
  };

  const steps = [
    { number: 1, title: 'Select Rental Option', active: currentStep >= 1, completed: currentStep > 1 },
    { number: 2, title: 'Basic Information', active: currentStep >= 2, completed: currentStep > 2 },
    { number: 3, title: 'Location', active: currentStep >= 3, completed: currentStep > 3 },
    { number: 4, title: 'Details', active: currentStep >= 4, completed: currentStep > 4 },
    { number: 5, title: 'Photos and Rules', active: currentStep >= 5, completed: currentStep > 5 }
  ];

  const rentalOptions = [
    { id: 'property', label: 'Property', icon: Home },
    { id: 'vehicle', label: 'Vehicle', icon: Building },
    { id: 'event-hall', label: 'Event-Hall', icon: Car },
    { id: 'tool-and-equipment', label: 'Tools & Equipment', icon: Building2 },
    { id: 'electronics', label: 'Electronics', icon: MapPin }
  ];

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
    'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi',
    'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
    'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const getCitiesByState = (state: string) => {
    const citiesMap: Record<string, string[]> = {
      'Lagos': ['Ikeja', 'Victoria Island', 'Lekki', 'Surulere', 'Yaba', 'Ikoyi', 'Ajah', 'Magodo', 'Gbagada', 'Alaba'],
      'FCT': ['Abuja', 'Gwagwalada', 'Kuje', 'Bwari', 'Kwali', 'Abaji', 'Garki', 'Wuse', 'Maitama', 'Asokoro'],
      'Rivers': ['Port Harcourt', 'Obio-Akpor', 'Okrika', 'Eleme', 'Tai', 'Gokana', 'Bonny', 'Degema'],
      'Kano': ['Kano', 'Wudil', 'Gwarzo', 'Dala', 'Gwale', 'Tarauni', 'Fagge', 'Nassarawa'],
      'Ogun': ['Abeokuta', 'Ijebu Ode', 'Sagamu', 'Ota', 'Ilaro', 'Ayetoro', 'Ago-Iwoye', 'Shagamu'],
      'Oyo': ['Ibadan', 'Ogbomoso', 'Oyo', 'Iseyin', 'Iwo', 'Ejigbo', 'Igboho', 'Lalupon'],
      'Kaduna': ['Kaduna', 'Zaria', 'Kafanchan', 'Sabon Gari', 'Soba', 'Igabi', 'Chikun'],
      'Katsina': ['Katsina', 'Daura', 'Funtua', 'Malumfashi', 'Dutsin-Ma', 'Kankia'],
      'Anambra': ['Awka', 'Onitsha', 'Nnewi', 'Ekwulobia', 'Agulu', 'Ihiala', 'Orumba']
    };
    return citiesMap[state] || [];
  };

  const propertyTypes = [
      { id: 'apartment', label: 'Apartment', icon: Building },
      { id: 'house', label: 'House', icon: Home },
      { id: 'condo', label: 'Condo', icon: Building2 },
      { id: 'villa', label: 'Villa', icon: MapPin }
    ];

  const amenities = [
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
    { id: 'parking', label: 'Free Parking', icon: Car },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils },
    { id: 'tv', label: 'TV', icon: Tv },
    { id: 'coffee', label: 'Coffee Maker', icon: Coffee },
    { id: 'pool', label: 'Swimming Pool', icon: Waves }
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link 
              to="/"
              className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Add Property</h1>
              <p className="text-gray-600 mt-1">Share your space with travelers from around the world</p>
            </div>
          </div>

          {/* Progress Steps with Animated Lines */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 z-10 relative
                      ${step.completed 
                        ? 'bg-teal-600 text-white' 
                        : step.active 
                          ? 'bg-teal-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      {step.completed ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p className={`text-xs font-medium transition-colors duration-300 ${
                        step.active ? 'text-teal-600' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-4 relative">
                      {/* Background line */}
                      <div className="h-0.5 bg-gray-200 w-full" />
                      {/* Animated progress line */}
                      <div 
                        className={`
                          absolute top-0 left-0 h-0.5 bg-teal-600 transition-all duration-500 ease-in-out
                          ${steps[index + 1].active ? 'w-full' : 'w-0'}
                        `}
                        style={{
                          transitionDelay: steps[index + 1].active ? '200ms' : '0ms'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 min-h-[500px]">
            {currentStep === 1 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-12">Select Rentable</h2>
                  
                  {/* Rental Options */}
                  <div className="mb-12">
                    <div className="flex flex-wrap gap-4 justify-center">
                      {rentalOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handlePropertyTypeSelect(option.id)}
                            className={`
                              px-6 py-3 rounded-full border-2 text-sm font-medium transition-all duration-200 flex items-center space-x-2
                              ${formData.rentalOption === option.id 
                                ? 'border-teal-500 bg-teal-500 text-white' 
                                : 'border-gray-300 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50'
                              }
                            `}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.rentalOption && (
                      <p className="mt-4 text-sm text-red-600 text-center">{errors.rentalOption}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Short-let Basic Information
                  </h2>

                  {/* Property Title */}
                  <div className="mb-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Property Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      onBlur={validateField}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-colors ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Give it a catchy title"
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>

                  {/* Property Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Property Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {propertyTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handlePropertyTypeSelect(type.id)}
                            className={`
                              p-6 border-2 rounded-lg text-center transition-all
                              ${formData.propertyType === type.id
                                ? "border-teal-500 bg-teal-50"
                                : errors.propertyType
                                  ? "border-red-300 hover:border-red-400"
                                  : "border-gray-200 hover:bg-gray-50"}
                            `}
                          >
                            <Icon
                              className={`w-8 h-8 mx-auto mb-3 ${
                                formData.propertyType === type.id
                                  ? "text-teal-600"
                                  : "text-gray-400"
                              }`}
                            />
                            <p
                              className={`text-sm font-medium ${
                                formData.propertyType === type.id
                                  ? "text-teal-900"
                                  : "text-gray-700"
                              }`}
                            >
                              {type.label}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                    {errors.propertyType && (
                      <p className="mt-2 text-sm text-red-600">{errors.propertyType}</p>
                    )}
                  </div>

                  {/* Type of Lease */}
                  <div className="mb-6">
                    <label
                      htmlFor="typeOfLease"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Type of lease <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="typeOfLease"
                      name="typeOfLease"
                      value={formData.typeOfLease}
                      onChange={handleInputChange}
                      onBlur={validateField}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base bg-white transition-colors ${
                        errors.typeOfLease ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="short-term">Short-term rental</option>
                      <option value="long-term">Long-term rental</option>
                      <option value="vacation">Vacation rental</option>
                      <option value="corporate">Corporate housing</option>
                    </select>
                    {errors.typeOfLease && (
                      <p className="mt-1 text-sm text-red-600">{errors.typeOfLease}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      onBlur={validateField}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base resize-none transition-colors ${
                        errors.description ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Describe your property and what makes it special..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}


            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-8">Location Details</h2>
                  
                  {/* State and City/Town Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={(e) => {
                          handleInputChange(e);
                          // Reset city when state changes
                          setFormData(prev => ({ ...prev, cityTown: '' }));
                        }}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base bg-white transition-colors ${
                          errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select</option>
                        {nigerianStates.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cityTown" className="block text-sm font-medium text-gray-700 mb-2">
                        City/Town <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="cityTown"
                        name="cityTown"
                        value={formData.cityTown}
                        onChange={handleInputChange}
                        disabled={!formData.state}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base bg-white transition-colors ${
                          errors.cityTown ? 'border-red-500' : 'border-gray-300'
                        } ${!formData.state ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                      >
                        <option value="">Select</option>
                        {getCitiesByState(formData.state).map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      {errors.cityTown && (
                        <p className="mt-1 text-sm text-red-600">{errors.cityTown}</p>
                      )}
                    </div>
                  </div>

                  {/* Detailed Address and Google Map Link Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="detailedAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Detailed Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="detailedAddress"
                        name="detailedAddress"
                        rows={4}
                        value={formData.detailedAddress}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base resize-none transition-colors ${
                          errors.detailedAddress ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter the full address"
                      />
                      {errors.detailedAddress && (
                        <p className="mt-1 text-sm text-red-600">{errors.detailedAddress}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="googleMapLink" className="block text-sm font-medium text-gray-700 mb-2">
                        Paste google map link (Optional)
                      </label>
                      <textarea
                        id="googleMapLink"
                        name="googleMapLink"
                        rows={4}
                        value={formData.googleMapLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base resize-none"
                        placeholder="Enter the full address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-8">Property Details</h2>
                  
                  {/* Price and Maximum Guest Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                        Price <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-colors ${
                          errors.price ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Select"
                      />
                      {errors.price && (
                        <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="maximumGuest" className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Guest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="maximumGuest"
                        name="maximumGuest"
                        value={formData.maximumGuest}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base bg-white transition-colors ${
                          errors.maximumGuest ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                      {errors.maximumGuest && (
                        <p className="mt-1 text-sm text-red-600">{errors.maximumGuest}</p>
                      )}
                    </div>
                  </div>

                  {/* Number of Bedrooms and Bathrooms Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="numberOfBedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Bedrooms
                      </label>
                      <input
                        type="number"
                        id="numberOfBedrooms"
                        name="numberOfBedrooms"
                        min="1"
                        value={formData.numberOfBedrooms}
                        onChange={(e) => handleNumberChange('numberOfBedrooms', parseInt(e.target.value) || 1)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base"
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label htmlFor="numberOfBathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Bathrooms
                      </label>
                      <input
                        type="number"
                        id="numberOfBathrooms"
                        name="numberOfBathrooms"
                        min="1"
                        value={formData.numberOfBathrooms}
                        onChange={(e) => handleNumberChange('numberOfBathrooms', parseInt(e.target.value) || 1)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base"
                        placeholder="1"
                      />
                    </div>
                  </div>

                  {/* Select Available Amenities */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Available Amenities
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {amenities.map((amenity) => {
                        const Icon = amenity.icon;
                        const isSelected = formData.selectedAmenities.includes(amenity.id);
                        return (
                          <button
                            key={amenity.id}
                            type="button"
                            onClick={() => handleAmenityToggle(amenity.id)}
                            className={`
                              p-4 border-2 rounded-lg text-center transition-all hover:border-teal-300
                              ${isSelected 
                                ? 'border-teal-500 bg-teal-50' 
                                : 'border-gray-200 hover:bg-gray-50'
                              }
                            `}
                          >
                            <Icon className={`
                              w-6 h-6 mx-auto mb-2
                              ${isSelected ? 'text-teal-600' : 'text-gray-400'}
                            `} />
                            <p className={`
                              text-sm font-medium
                              ${isSelected ? 'text-teal-900' : 'text-gray-700'}
                            `}>
                              {amenity.label}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-8">Photos, Video & Rules</h2>
                  
                  {/* Upload Property Photos */}
                  <div className="mb-8">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Property Photos</h3>
                      <p className="text-sm text-gray-600 mb-4">Drag and drop or upload high quality images</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files, 'photos')}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors"
                      >
                        Browse photos
                      </label>
                    </div>
                    {errors.propertyPhotos && (
                      <p className="mt-2 text-sm text-red-600">{errors.propertyPhotos}</p>
                    )}
                    
                    {/* Display uploaded photos */}
                    {formData.propertyPhotos.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.propertyPhotos.map((photo, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt={`Property ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-gray-200"
                            />
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Upload Property Video */}
                  <div className="mb-8">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Property Video</h3>
                      <p className="text-sm text-gray-600 mb-4">Drag and drop or upload a high quality video</p>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e.target.files, 'video')}
                        className="hidden"
                        id="video-upload"
                      />
                      <label
                        htmlFor="video-upload"
                        className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors"
                      >
                        Browse videos
                      </label>
                    </div>
                    
                    {/* Display uploaded video */}
                    {formData.propertyVideo && (
                      <div className="mt-4">
                        <div className="relative inline-block">
                          <video
                            src={URL.createObjectURL(formData.propertyVideo)}
                            className="w-full max-w-md h-32 object-cover rounded-lg border border-gray-200"
                            controls
                          />
                          <button
                            type="button"
                            onClick={removeVideo}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lease Period */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-4">Lease Period</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="leasePeriod"
                          value="daily"
                          checked={formData.leasePeriod === 'daily'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Daily</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="leasePeriod"
                          value="monthly"
                          checked={formData.leasePeriod === 'monthly'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Monthly</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="leasePeriod"
                          value="yearly"
                          checked={formData.leasePeriod === 'yearly'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Yearly</span>
                      </label>
                    </div>
                  </div>

                  {/* Check-in and Check-out Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="checkInTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="checkInTime"
                        name="checkInTime"
                        value={formData.checkInTime}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-colors ${
                          errors.checkInTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.checkInTime && (
                        <p className="mt-1 text-sm text-red-600">{errors.checkInTime}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="checkOutTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="checkOutTime"
                        name="checkOutTime"
                        value={formData.checkOutTime}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-colors ${
                          errors.checkOutTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.checkOutTime && (
                        <p className="mt-1 text-sm text-red-600">{errors.checkOutTime}</p>
                      )}
                    </div>
                  </div>

                  {/* House Rules */}
                  <div className="mb-6">
                    <label htmlFor="houseRules" className="block text-sm font-medium text-gray-700 mb-2">
                      House Rules
                    </label>
                    <textarea
                      id="houseRules"
                      name="houseRules"
                      rows={6}
                      value={formData.houseRules}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base resize-none"
                      placeholder="List any specific rules or guidelines for guests (e.g., no smoking, No pet, Quiet hours etc.)"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`
                  px-8 py-3 rounded-lg font-medium transition-colors text-base
                  ${currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }
                `}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors flex items-center text-base"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddProperty;



