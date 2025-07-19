import React, { useState } from 'react';
import { ChevronDown, LayoutGrid, List } from 'lucide-react';

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('All');

  const handleSelectState = (state: string) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  return (
    <div className="w-full px-6 py-4 relative">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left: State */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">State</p>
            <div
              className="flex items-center px-4 py-1 bg-white border rounded-md cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <p className="text-sm">{selectedState}</p>
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto">
              {nigerianStates.map((state) => (
                <div
                  key={state}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectState(state)}
                >
                  {state}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Center: Availability + Show As */}
        <div className="flex items-center gap-2">
          {/* Availability */}
          <div className="flex items-center gap-4 bg-white p-2 rounded-md">
            <div className="flex items-center gap-2">
              <p className="text-sm">Available</p>
              <span className="text-sm px-2 py-1 rounded bg-blue-300 text-black font-semibold">
                5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm">Rented Out</p>
              <span className="text-sm px-2 py-1 rounded bg-slate-600 text-white font-semibold">
                4
              </span>
            </div>
          </div>

          {/* Show As */}
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <p className="text-gray-400 text-sm">Show as:</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg text-white cursor-pointer">
                <LayoutGrid size={16} className="text-blue-900 bg-blue-950" />
                <span className="text-sm text-black">Grid</span>
              </span>
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg text-gray-500 cursor-pointer">
                <List size={16} className="text-gray-500" />
                <span className="text-sm">List</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Sort By */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md">
          <p className="text-gray-400 text-sm">Sort by</p>
          <div className="flex items-center gap-1">
            <span className="text-sm text-black font-semibold">Newest to Oldest</span>
            <ChevronDown size={16} className="text-black font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
