// src/hooks/useSignupValidation.js

const useSignupValidation = () => {
  const validateRoleSelection = (selectedRole) => {
    const errors = {};
    if (!selectedRole) errors.role = 'Please select a role';
    return { errors, isValid: Object.keys(errors).length === 0 };
  };

  const validateBasicInfo = (formData, selectedRole) => {
    const errors = {};

    // Generic
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      errors.phone = 'Enter a valid phone number';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Role-specific validation
    if (selectedRole === 'restaurant') {
      if (!formData.restaurantName) errors.restaurantName = 'Restaurant name is required';
      if (!formData.restaurantAddress) errors.restaurantAddress = 'Restaurant address is required';
      if (!formData.cuisine) errors.cuisine = 'Cuisine type is required';
    }

    if (selectedRole === 'driver') {
      if (!formData.licenseNumber) errors.licenseNumber = 'License number is required';
      if (!formData.vehicleType) errors.vehicleType = 'Vehicle type is required';
      if (!formData.vehicleNumber) errors.vehicleNumber = 'Vehicle number is required';
    }

    if (selectedRole === 'customer') {
      if (!formData.address) errors.address = 'Address is required';
    }

    return { errors, isValid: Object.keys(errors).length === 0 };
  };

  return { validateRoleSelection, validateBasicInfo };
};

export default useSignupValidation;
