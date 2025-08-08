import React from "react";
import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";
import DocumentUpload from "../../common/DocumentUpload";
import { File } from "lucide-react";

const DriverInfoSection = ({ formData, setFormData, errors }) => {
    const vehicleTypes = ["Motorcycle", "Bicycle", "Car", "Scooter"];

    const handleChange = (field) => (e) => {
        const value = e?.target?.files
            ? e.target.files[0]
            : e?.target?.value ?? e; // `e` is directly the file when coming from drag-drop or file input

        setFormData({ ...formData, [field]: value });
    };


    return (
        <>
        <div className="space-y-6">


            <InputField
                label="License Number"
                placeholder="Enter driving license number"
                value={formData.licenseNumber}
                onChange={handleChange("license_number")}
                error={errors.licenseNumber}
                required
            />
                <InputField
                    label="Vehicle Number"
                    placeholder="Enter vehicle registration number"
                    value={formData.vehicleNumber}
                    onChange={handleChange("vehicle_number")}
                    error={errors.vehicleNumber}
                    required
                />
        </div>
            <SelectField
                label="Vehicle Type"
                value={formData.vehicleType}
                onChange={handleChange("vehicle_type")}
                options={vehicleTypes}
                error={errors.vehicleType}
                required
            />
            <DocumentUpload
                title={"Identity Proof"}
                onUpload={handleChange("identity_proof")}
                description={
                    "Upload your identity proof (e.g., passport, driver's license, national ID, etc.)"
                }
                value={formData.identity_proof}
                icon={File}
            />
        </>
    );
};

export default DriverInfoSection;
