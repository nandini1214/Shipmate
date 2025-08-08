import React, { useState } from 'react';
import { X, Car, FileText, Image, Shield, Calendar, Palette, Settings } from 'lucide-react';

// Reusable DocumentUpload Component
const DocumentUpload = ({ title, description, icon: Icon, onUpload, value }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploaded, setIsUploaded] = useState(!!value);

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
            className={`border-2 border-dashed rounded-xl p-4 text-center transition-all duration-300 cursor-pointer ${isDragging
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
                className={`h-8 w-8 mx-auto mb-2 flex items-center justify-center rounded-lg ${isUploaded ? 'bg-green-500' : 'bg-gray-400'
                    }`}
            >
                <Icon className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-600 mb-2">{description}</p>

            <label className="inline-block cursor-pointer">
                <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                />
                <span
                    className={`px-3 py-1 text-xs inline-block rounded-md font-medium transition-all duration-200 ${isUploaded
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {isUploaded ? 'Uploaded ✓' : 'Choose File'}
                </span>
            </label>
        </div>
    );
};

// Reusable InputField Component
const InputField = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    icon: Icon,
    required = false,
    name
}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                />
            </div>
        </div>
    );
};

// Reusable SelectField Component
const SelectField = ({
    label,
    value,
    onChange,
    options = [],
    required = false,
    name,
}) => (
    <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
    </div>
);

// Main Vehicle Modal Component
export default function VehicleModal({ isOpen, onClose, onSubmit, initialData = {} }) {
    const [formData, setFormData] = useState({
        driver_id: initialData.driver_id || '',
        vehicle_type: initialData.vehicle_type || '',
        vehicle_number: initialData.vehicle_number || '',
        insurance_expiry_date: initialData.insurance_expiry_date || '',
        vehicle_color: initialData.vehicle_color || '',
        vehicle_make_model: initialData.vehicle_make_model || '',
        status: initialData.status || 'active',
        remarks: initialData.remarks || '',
        vehicle_capacity: initialData.vehicle_capacity || '',
        // File uploads
        arc_upload: initialData.arc_upload || null,
        vehicle_photo: initialData.vehicle_photo || null,
        driving_license_upload: initialData.driving_license_upload || null,
        pollution_certificate: initialData.pollution_certificate || null,
        insurance_upload: initialData.insurance_upload || null,
    });

    const [currentStep, setCurrentStep] = useState(1);

    const VEHICLE_TYPES = [
        { value: 'bike', label: 'Bike' },
        { value: 'scooter', label: 'Scooter' },
        { value: 'car', label: 'Car' },
        { value: 'van', label: 'Van' },
        { value: 'truck', label: 'Truck' },
    ];

    const STATUS_OPTIONS = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'maintenance', label: 'Under Maintenance' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileUpload = (fieldName) => (file) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-800 to-indigo-400 px-6 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-white">Vehicle Management</h2>
                        <p className="text-blue-100 text-sm">
                            Step {currentStep} of 3 - {currentStep === 1 ? 'Basic Information' : currentStep === 2 ? 'Vehicle Details' : 'Documents Upload'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-200 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-3 bg-gray-50">
                    <div className="flex items-center">
                        {[1, 2, 3].map((step) => (
                            <React.Fragment key={step}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                                    }`}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div className={`flex-1 h-2 mx-2 rounded ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                                        }`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    <div>
                        {/* Step 1: Basic Information */}
                        {currentStep === 1 && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* <InputField
                                        label="Driver ID"
                                        name="driver_id"
                                        value={formData.driver_id}
                                        onChange={handleInputChange}
                                        icon={Car}
                                        required
                                        placeholder="Enter driver ID"
                                    /> */}

                                    <SelectField
                                        label="Vehicle Type"
                                        name="vehicle_type"
                                        value={formData.vehicle_type}
                                        onChange={handleInputChange}
                                        options={VEHICLE_TYPES}
                                        required
                                    />

                                    <InputField
                                        label="Vehicle Number"
                                        name="vehicle_number"
                                        value={formData.vehicle_number}
                                        onChange={handleInputChange}
                                        icon={Settings}
                                        required
                                        placeholder="e.g., MH01AB1234"
                                    />

                                    <InputField
                                        label="Vehicle Capacity"
                                        name="vehicle_capacity"
                                        type="number"
                                        value={formData.vehicle_capacity}
                                        onChange={handleInputChange}
                                        icon={Settings}
                                        placeholder="Capacity (kg or passengers)"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Vehicle Details */}
                        {currentStep === 2 && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Vehicle Color"
                                        name="vehicle_color"
                                        value={formData.vehicle_color}
                                        onChange={handleInputChange}
                                        icon={Palette}
                                        placeholder="e.g., Red, Blue, White"
                                    />

                                    <InputField
                                        label="Vehicle Make & Model"
                                        name="vehicle_make_model"
                                        value={formData.vehicle_make_model}
                                        onChange={handleInputChange}
                                        icon={Car}
                                        placeholder="e.g., Honda City, Maruti Swift"
                                    />

                                    <InputField
                                        label="Insurance Expiry Date"
                                        name="insurance_expiry_date"
                                        type="date"
                                        value={formData.insurance_expiry_date}
                                        onChange={handleInputChange}
                                        icon={Calendar}
                                        required
                                    />

                                    <SelectField
                                        label="Status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        options={STATUS_OPTIONS}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Remarks
                                    </label>
                                    <textarea
                                        name="remarks"
                                        value={formData.remarks}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Additional notes or remarks..."
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Documents Upload */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    <DocumentUpload
                                        title="ARC Upload"
                                        description="Upload vehicle ARC document"
                                        icon={FileText}
                                        onUpload={handleFileUpload('arc_upload')}
                                        value={formData.arc_upload}
                                    />

                                    <DocumentUpload
                                        title="Vehicle Photo"
                                        description="Upload vehicle photograph"
                                        icon={Image}
                                        onUpload={handleFileUpload('vehicle_photo')}
                                        value={formData.vehicle_photo}
                                    />

                                    <DocumentUpload
                                        title="Driving License"
                                        description="Upload driver's license"
                                        icon={Shield}
                                        onUpload={handleFileUpload('driving_license_upload')}
                                        value={formData.driving_license_upload}
                                    />

                                    <DocumentUpload
                                        title="Pollution Certificate"
                                        description="Upload PUC certificate"
                                        icon={FileText}
                                        onUpload={handleFileUpload('pollution_certificate')}
                                        value={formData.pollution_certificate}
                                    />


                                    <DocumentUpload
                                        title="Insurance Document"
                                        description="Upload vehicle insurance papers"
                                        icon={Shield}
                                        onUpload={handleFileUpload('insurance_upload')}
                                        value={formData.insurance_upload}
                                    />

                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-8 pt-6 border-t">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={`px-6 py-2 rounded-lg font-medium transition-colors ${currentStep === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                    }`}
                            >
                                Previous
                            </button>

                            <div className="flex space-x-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>

                                {currentStep < 3 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Save Vehicle
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}