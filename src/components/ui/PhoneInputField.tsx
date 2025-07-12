import React, { useState } from 'react';

interface PhoneInputFieldProps {
  label: string;
  phone: string;
  setPhone: (value: string) => void;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  phone,
  setPhone,
}) => {
  const [countryCode, setCountryCode] = useState('+234');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/^0+/, ''); // strip leading 0s
    setPhone(countryCode + raw);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
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
          value={phone.replace(countryCode, '')}
          onChange={handlePhoneChange}
          placeholder="8123456789"
          className="pl-24 p-2 w-full text-sm border-2 border-gray-300 rounded-lg outline-gray-400"
        />
      </div>
    </div>
  );
};

export default PhoneInputField;
