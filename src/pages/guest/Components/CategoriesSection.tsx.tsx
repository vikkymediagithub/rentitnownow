import React from 'react';

interface Category {
  name: string;
  icon: string; // Image URL
  count: string;
}

const categories: Category[] = [
  {
    name: 'Mini-flat',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png',
    count: '102,000+',
  },
  {
    name: 'Apartments',
    icon: 'https://cdn-icons-png.flaticon.com/512/3943/3943357.png',
    count: '102,000+',
  },
  {
    name: 'Bungalows',
    icon: 'https://cdn-icons-png.flaticon.com/512/2283/2283895.png',
    count: '102,000+',
  },
  {
    name: 'Villas',
    icon: 'https://cdn-icons-png.flaticon.com/512/6193/6193888.png',
    count: '102,000+',
  },
  {
    name: 'Duplexes',
    icon: 'https://cdn-icons-png.flaticon.com/512/5542/5542144.png',
    count: '102,000+',
  },
  {
    name: 'Shops',
    icon: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',
    count: '102,000+',
  },
  {
    name: 'Condo',
    icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    count: '102,000+',
  },
  {
    name: 'Condo',
    icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    count: '102,000+',
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <div className=" p-10 bg-white mt-20 mx-5 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition"
          >
            <img src={category.icon} alt={category.name} className="w-10 h-10 mb-2" />
            <h3 className="text-sm font-medium">{category.name}</h3>
            <p className="text-xs text-gray-500">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
