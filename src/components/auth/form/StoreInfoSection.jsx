import React from 'react';
import { Store, MapPin } from 'lucide-react';
import InputField from '../../common/InputField';
import SelectField from '../../common/SelectField';

const StoreInfoSection = ({ formData, setFormData, errors }) => {
  const storeTypes = [
    'Grocery',
    'Pharmacy',
    'Electronics',
    'Clothing',
    'Books & Stationery',
    'Bakery',
    'Hardware',
    'Home & Living',
    'Fast Food',
    'Courier & Logistics',
    'Other',
  ];

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <>
      <InputField
        label="Store/Business Name"
        placeholder="Enter store or business name"
        value={formData.storeName}
        onChange={handleChange('business_name')}
        icon={Store}
        error={errors?.storeName}
        required
      />
      {/* <InputField
        label="Store/Business Address"
        placeholder="Enter address"
        value={formData.storeAddress}
        onChange={handleChange('storeAddress')}
        icon={MapPin}
        error={errors?.storeAddress}
        required
      /> */}
      <SelectField
        label="Type of Business"
        value={formData.storeType}
        onChange={handleChange('bussiness_type')}
        options={storeTypes}
        error={errors?.storeType}
        required
      />
    </>
  );
};

export default StoreInfoSection;
