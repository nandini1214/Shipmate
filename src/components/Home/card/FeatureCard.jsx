import React, { useState, useEffect } from 'react';

const FeatureCard = ({ icon: Icon, title, description, color, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div
        className={`${color} rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
