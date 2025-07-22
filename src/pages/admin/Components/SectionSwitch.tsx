import React from 'react'
import { ChevronDown } from 'lucide-react'

interface SectionSwitchProps {
  selected: 'User' | 'Properties'
  setSelected: (value: 'User' | 'Properties') => void
}

const SectionSwitch: React.FC<SectionSwitchProps> = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: 'User' | 'Properties') => {
    setSelected(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button onClick={handleToggle} className="flex items-center w-full px-4 py-2">
        <span className="font-semibold text-2xl">{selected}</span>
        <ChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-md z-10">
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
    </div>
  )
}

export default SectionSwitch
