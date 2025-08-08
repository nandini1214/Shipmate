import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DriverInfoSection from "../form/DriverInfoSection";
import BasicInfoSection from "../form/BasicInfoSection";
import TermsCheckbox from "../../common/TermsCheckbox";
import LoadingButton from "../../common/LoadingButton";
import useSignupValidation from "../hooks/useSignupValidation";
import showToast from "../hooks/ShowToast";
import { registerUser, resetAuthState } from "../../../redux/Slices/auth/authSlice";
import { ArrowLeft } from "lucide-react";
import ProgressSteps from "../../common/ProgressSteps";

const SignupForm = ({ onSwitchToLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, success, user } = useSelector((state) => state.auth || {});
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Basic info
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    contact: "",
    gender: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    profile_image: null,
    is_agreed: 0,

    // Driver-specific
    license_number: "",
    vehicle_type: "",
    vehicle_number: "",
    identity_proof: null,
    is_available: false,

    // Hardcoded role
    user_type: "driver",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { validateRoleSelection } = useSignupValidation();

  const steps = [
    { number: 1, label: "Basic Info" },
    { number: 2, label: "Driver Details" },
  ];

  const handleNext = () => {
    // Optional: basic validation before moving to step 2
    if (!formData.first_name || !formData.email || !formData.password || !formData.confirm_password) {
      setErrors({
        first_name: !formData.first_name ? "First name is required" : "",
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
        confirm_password:
          formData.password !== formData.confirm_password
            ? "Passwords do not match"
            : "",
      });
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleTermsChange = (isChecked) => {
    setFormData((prev) => ({
      ...prev,
      is_agreed: isChecked ? 1 : 0,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      await dispatch(registerUser({ formData }));
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message === "") return;
    showToast(message, success ? "success" : "error");
    if (success && message?.toLowerCase().includes("registered successfull")) {
      navigate(`/login/`);
    }
    dispatch(resetAuthState());
  }, [dispatch, user, message, success]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Delivery Partner Signup
            </h2>
            <p className="mt-2 text-gray-600">Join our delivery platform</p>
          </div>

          <ProgressSteps currentStep={step} steps={steps} />

          {step === 1 && (
            <>
              <BasicInfoSection
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <div className="flex space-x-4">
                <button
                  onClick={() => navigate("/login/")}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 inline mr-2" />
                  Back to Login
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <DriverInfoSection
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <TermsCheckbox
                isChecked={formData.is_agreed}
                onChange={handleTermsChange}
              />

              {errors.general && (
                <div className="text-sm text-red-600 text-center" aria-live="polite">
                  {errors.general}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 inline mr-2" />
                  Back
                </button>
                <LoadingButton
                  isLoading={isLoading}
                  onClick={handleSubmit}
                  className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Create Account
                </LoadingButton>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={onSwitchToLogin}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
