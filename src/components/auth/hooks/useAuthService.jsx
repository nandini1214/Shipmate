// src/hooks/useAuthService.js

const useAuthService = () => {
  const simulateDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  const login = async (formData) => {
    await simulateDelay(1500);
    console.log('[Auth] Login attempt:', formData);
    return { success: true, message: `Login successful as ${formData.role}!` };
  };

  const signup = async (formData, selectedRole) => {
    await simulateDelay(2000);
    console.log('[Auth] Signup data:', { ...formData, role: selectedRole });
    return { success: true, message: `Account created successfully as ${selectedRole}!` };
  };

  const forgotPassword = async (email) => {
    await simulateDelay(1500);
    console.log('[Auth] Password reset for:', email);
    return { success: true, message: 'Password reset link sent!' };
  };

  return {
    login,
    signup,
    forgotPassword,
  };
};

export default useAuthService;
