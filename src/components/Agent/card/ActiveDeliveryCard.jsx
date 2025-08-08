// src/components/cards/ActiveDeliveryCard.jsx
import React from 'react';
import { Truck, MapPin, Navigation, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const ActiveDeliveryCard = ({ delivery }) => {
  const statusSteps = ['pickup', 'in-transit', 'delivered'];
  const currentStepIndex = statusSteps.indexOf(delivery.status);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 rounded-lg p-2">
            <Truck className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Order #{delivery.id}</h3>
            <p className="text-sm text-gray-600">{delivery.customer}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">₹{delivery.earnings}</p>
          <p className="text-sm text-gray-600">{delivery.timeRemaining} left</p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="flex items-center mb-4">
        {statusSteps.map((step, index) => (
          <React.Fragment key={step}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
                index <= currentStepIndex
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index < currentStepIndex ? <CheckCircle className="h-4 w-4" /> : index + 1}
            </div>
            {index < statusSteps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  index < currentStepIndex ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Location Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{delivery.currentLocation}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Navigation className="h-4 w-4" />
          <span>Next: {delivery.nextDestination}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
          <Navigation className="h-4 w-4" />
          <span>Navigate</span>
        </button>
        <button className="bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors">
          <Phone className="h-4 w-4" />
        </button>
        <button className="bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors">
          <MessageCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ActiveDeliveryCard;
