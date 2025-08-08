// src/components/form/TermsCheckbox.jsx
import React from 'react';

const TermsCheckbox = ({
  name = 'terms',
  checked,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex items-start space-x-2">
      <input
        id={name}
        name={name}
        type="checkbox"
        required={required}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
      />
      <label htmlFor={name} className="text-sm text-gray-600">
        I agree to the{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a>{' '}
        and{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
      </label>
    </div>
  );
};

export default TermsCheckbox;
