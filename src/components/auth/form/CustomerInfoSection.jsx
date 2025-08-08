import React from 'react';
import { MapPin } from 'lucide-react';
import InputField from '../../common/InputField';


const CustomerInfoSection = ({ formData, setFormData, errors }) => {
    const handleChange = (e) =>
        setFormData({ ...formData, address: e.target.value });

    return (
        <InputField
            label="Address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            icon={MapPin}
            error={errors.address}
            required
        />
    );
};

export default CustomerInfoSection;
