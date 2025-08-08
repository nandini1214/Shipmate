// src/components/form/LoadingButton.jsx
import React from 'react';

const LoadingButton = ({
  isLoading,
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
