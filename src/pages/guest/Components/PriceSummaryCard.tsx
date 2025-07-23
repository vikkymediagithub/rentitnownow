import React from 'react'

const PriceSummaryCard = () => {
  return (
    <div className="w-96 bg-white rounded-xl shadow-sm p-6 space-y-4 mt-3">
      <h3 className="font-semibold text-lg">Your price summary</h3>

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex justify-between">
          <span>Original Price:</span>
          <span className="font-medium">NGN250,000</span>
        </div>
        <div className="flex justify-between">
          <span>Discounted Price:</span>
          <span className="font-medium">NGN200,000</span>
        </div>
        <div className="flex justify-between">
          <span>VAT:</span>
          <span className="font-medium">NGN0</span>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
        <p className="text-sm text-gray-500">Total Price</p>
        <p className="text-xl font-bold text-gray-800">NGN200,000</p>
      </div>
    </div>
  )
}

export default PriceSummaryCard
