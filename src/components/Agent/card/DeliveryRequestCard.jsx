// src/components/cards/DeliveryRequestCard.jsx
import React from 'react';
import { Package, MapPin, Navigation, Clock } from 'lucide-react';

const DeliveryRequestCard = ({ request, onAccept, onDecline }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 rounded-lg p-2">
            <Package className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Order #{request.id}</h3>
            <p className="text-sm text-gray-600">{request.restaurant}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">₹{request.earnings}</p>
          <p className="text-sm text-gray-600">{request.distance}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>Pickup: {request.pickup}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Navigation className="h-4 w-4" />
          <span>Drop: {request.dropoff}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Est. Time: {request.estimatedTime}</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => onDecline(request.id)}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={() => onAccept(request.id)}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default DeliveryRequestCard;
