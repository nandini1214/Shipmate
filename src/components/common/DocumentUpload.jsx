import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const DocumentUpload = ({ title, description, icon: Icon, onUpload, value }) => {
  console.log(value)
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setIsUploaded(true);
      onUpload?.(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploaded(true);
      onUpload?.(file);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-5 text-center transition-all duration-300 cursor-pointer ${isDragging
          ? 'border-blue-400 bg-blue-50'
          : isUploaded
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-blue-300'
        }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <div
        className={`h-8 w-8 mx-auto mb-2 flex items-center justify-center rounded-xl ${isUploaded ? 'bg-green-500' : 'bg-gray-400'
          }`}
      >
        {isUploaded ? (
          <CheckCircle className="h-6 w-6 text-white" />
        ) : (
          <Icon className="h-6 w-6 text-white" />
        )}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <label className="inline-block cursor-pointer">
        <input
          type="file"
          onChange={handleFileSelect}
          className="hidden"
        
        />
        <span
          className={`px-4 py-2 inline-block rounded-lg font-medium transition-all duration-200 ${isUploaded
              ? 'bg-green-500 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
        >
          {isUploaded ? 'Uploaded ✓' : 'Choose Files'}
        </span>
      </label>
    </div>
  );
};

export default DocumentUpload;
