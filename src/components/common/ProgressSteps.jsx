// src/components/form/ProgressSteps.jsx
import React from 'react';

const ProgressSteps = ({ currentStep, steps }) => (
  <div className="flex items-center justify-center space-x-4 mb-8">
    {steps.map((step, index) => (
      <React.Fragment key={step.number}>
        <div
          className={`flex items-center ${currentStep >= step.number ? 'text-indigo-600' : 'text-gray-400'
            }`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 border-2 rounded-full ${currentStep >= step.number
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-gray-300'
              }`}
          >
            {step.number}
          </div>
          <span className="ml-2 text-sm font-medium">{step.label}</span>
        </div>

        {index < steps.length - 1 && (
          <div
            className={`w-12 h-0.5 ${currentStep >= step.number + 1 ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default ProgressSteps;
