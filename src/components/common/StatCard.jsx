import React, { useState, useEffect } from 'react';

const StatCard = ({ title, value, icon: Icon, change, color, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
    // console.log(Icon);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </p>
          {change && (
            <p className="text-sm mt-2 text-green-600 font-medium">
              {change}
            </p>
          )}
        </div>
        <div className={`${color} rounded-xl p-4 shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
