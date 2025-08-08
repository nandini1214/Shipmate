// src/components/form/SelectField.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

const SelectField = ({
  label,
  value,
  onChange,
  options = [],
  error,
  required = false,
  name,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
        error ? 'border-red-300 bg-red-50' : 'border-gray-300'
      }`}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option) =>
        typeof option === 'string' ? (
          <option key={option} value={option}>
            {option}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
    {error && (
      <p className="text-sm text-red-600 flex items-center">
        <AlertCircle className="h-4 w-4 mr-1" />
        {error}
      </p>
    )}
  </div>
);

export default SelectField;
