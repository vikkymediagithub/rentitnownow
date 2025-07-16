import React, { useState } from 'react'
import { ArrowDown, ChevronDown } from 'lucide-react'

const SectionSwitch = () => {
  // Use the generic type directly inside <>
const [selected, setSelected] = useState<'User' | 'Properties'>('Properties')

const [isOpen, setIsOpen] = useState<boolean>(false)


  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: 'User' | 'Properties') => {
    setSelected(value)
    setIsOpen(false)
  }

  return (
    <div className="relative ">
      {/* Button */}
      <button
        onClick={handleToggle}
        className="flex items-center  w-full px-4 py-2  "
      >
        <span className="font-semibold text-2xl">{selected}</span>
        <ChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 P-20 bg-white border rounded-md shadow-md z-10">
          {selected !== 'User' && (
            <div
              onClick={() => handleSelect('User')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              User
            </div>
          )}
          {selected !== 'Properties' && (
            <div
              onClick={() => handleSelect('Properties')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Property
            </div>
          )}
        </div>
      )}

      {/* Display section */}
      
    </div>
  )
}

export default SectionSwitch
