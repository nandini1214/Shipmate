// src/hooks/useLoginValidation.js

const useLoginValidation = () => {
  const validateLogin = (formData) => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return { validateLogin };
};

export default useLoginValidation;
