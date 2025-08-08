// src/components/form/CompactRoleSelector.jsx
import React from 'react';

const CompactRoleSelector = ({ roles, selectedRole, onRoleSelect }) => (
  <div className="grid grid-cols-3 gap-3">
    {roles.map((role) => (
      <div
        key={role.value}
        onClick={() => onRoleSelect(role.value)}
        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
          selectedRole === role.value
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <role.icon
          className={`h-5 w-5 mr-3 ${
            selectedRole === role.value ? 'text-indigo-600' : 'text-gray-500'
          }`}
        />
        <span
          className={`text-sm font-medium ${
            selectedRole === role.value ? 'text-indigo-900' : 'text-gray-700'
          }`}
        >
          {role.label}
        </span>
      </div>
    ))}
  </div>
);

export default CompactRoleSelector;
