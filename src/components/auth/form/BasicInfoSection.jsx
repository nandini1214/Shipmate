import React from "react";
import { Lock, Mail, Phone, User } from "lucide-react";
import InputField from "../../common/InputField";

const BasicInfoSection = ({ formData, setFormData, errors }) => {
  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange("first_name")}
          icon={User}
          error={errors.firstName}
          required
        />
        <InputField
          label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange("last_name")}
          icon={User}
          error={errors.lastName}
          required
        />
      </div>

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
        label="Phone Number"
        type="tel"
        placeholder="Enter your Contact number"
        value={formData.phone}
        onChange={handleChange("contact")}
        icon={Phone}
        error={errors.phone}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Password"
          type="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange("password")}
          icon={Lock}
          error={errors.password}
          required
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange("confirm_password")}
          icon={Lock}
          error={errors.confirmPassword}
          required
        />
      </div>
    </>
  );
};

export default BasicInfoSection;
