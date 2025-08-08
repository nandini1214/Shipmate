import { ArrowLeft, CheckCircle, Mail } from "lucide-react";

import { useState } from "react";
import useAuthService from "../hooks/useAuthService";
import InputField from "../../common/InputField";


const ForgotPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { forgotPassword } = useAuthService();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await forgotPassword(email);
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to send reset email', error);
      // Optionally set error state for UI feedback
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Check your email</h2>
          <p className="mt-2 text-gray-600">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
        </div>
        <button
          onClick={onBack}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
        <p className="mt-2 text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          required
        />

        <LoadingButton
          isLoading={isLoading}
          onClick={handleSubmit}
          disabled={!email}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Send Reset Link
        </LoadingButton>

        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 inline mr-2" />
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
