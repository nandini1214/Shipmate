import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputField from "../../common/InputField";
import LoadingButton from "../../common/LoadingButton";
import useLoginValidation from "../hooks/useLoginValidation";
import showToast from "../hooks/ShowToast";
import { loginUser, resetAuthState } from "../../../redux/Slices/auth/authSlice";
import { Lock, Mail } from "lucide-react";

const DriverLoginForm = ({ onForgotPassword }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { message, success, user, error, loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        user_type: "driver", // Hardcoded for delivery partner
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { validateLogin } = useLoginValidation();

    const handleChange = (field) => (e) =>
        setFormData({ ...formData, [field]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        const { errors: validationErrors, isValid } = validateLogin(formData);

        if (!isValid) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try {
            await dispatch(loginUser({ formData }));
        } catch (error) {
            setErrors({ general: "Login failed. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (message === "") return;
        showToast(message, success ? "success" : "error");
        if (success && message?.toLowerCase().includes("logged in")) {
            navigate(`/${user.user_type}/${user.user_id}`);
        }
        dispatch(resetAuthState());
    }, [dispatch, user, message, success]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Delivery Partner Login</h2>
                        <p className="mt-2 text-gray-600">Sign in to your delivery account</p>
                    </div>

                    <div className="space-y-4">
                        <InputField
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange("email")}
                            icon={Mail}
                            error={errors.email}
                            required
                        />

                        <InputField
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange("password")}
                            icon={Lock}
                            error={errors.password}
                            required
                        />

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <button
                                type="button"
                                onClick={onForgotPassword}
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {errors.general && (
                            <div className="text-sm text-red-600 text-center" aria-live="polite">
                                {errors.general}
                            </div>
                        )}

                        <LoadingButton
                            isLoading={isLoading}
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </LoadingButton>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <button
                                    onClick={() => navigate("/signup")}
                                    type="button"
                                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    Sign up here
                                </button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DriverLoginForm;
