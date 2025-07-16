import React, { useState } from 'react';
import { ChevronDown, Grid, List } from 'lucide-react';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap items-center gap-4 py-2 px-4  rounded-md">
      {/* State Dropdown */}
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">State:</p>
        <div
          className="flex items-center px-4 py-1 bg-white border rounded-md cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-sm">All</p>
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-4 bg-white p-2 rounded-md">
        <div className="flex items-center gap-2">
          <p className="text-sm">Available</p>
          <span className="text-sm px-2 py-1 rounded bg-blue-300 text-black font-semibold">
            5
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Rented out</p>
          <span className="text-sm px-2 py-1 rounded bg-slate-600 text-white font-semibold">
            4
          </span>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-md">
        <p className="text-gray-400 text-sm">Show as:</p>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-600 text-white cursor-pointer">
            <Grid size={16} />
            <span className="text-sm">Grid</span>
          </span>
          <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-600 text-white cursor-pointer">
            <List size={16} />
            <span className="text-sm">List</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
