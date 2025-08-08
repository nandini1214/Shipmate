import React, { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import InputField from "../../common/InputField";

const NewDeliveryForm = ({ onEstimate }) => {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    const handleSubmit = () => {
        if (onEstimate) {
            onEstimate({ pickup, dropoff });
        } else {
            console.log("Estimate requested for:", { pickup, dropoff });
        }
    };

    return (
        <section>
            <div className="bg-gradient-to-r from-indigo-900 to-purple-600 rounded-xl p-6 text-white">
                <h2 className="text-xl font-bold mb-2">Need a Delivery?</h2>
                <p className="text-blue-100 mb-4">
                    Quick, reliable delivery across Indore
                </p>

                <div className="space-y-3">
                    <InputField
                        icon={MapPin}
                        placeholder="Pickup location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                    <InputField
                        icon={Navigation}
                        placeholder="Drop-off location"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Get Estimate
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewDeliveryForm;
