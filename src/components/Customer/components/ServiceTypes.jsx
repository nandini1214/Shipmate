import { Clock, Zap, Shield } from "lucide-react";
import ServiceCard from "./card/ServiceCard";


const defaultServices = [
    {
        icon: Clock,
        title: 'Standard',
        time: '2-4 hours',
        description: 'Regular delivery for non-urgent items',
        price: 'Starting ₹25',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: Zap,
        title: 'Express',
        time: '30-60 mins',
        description: 'Fast delivery for urgent requirements',
        price: 'Starting ₹50',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        icon: Shield,
        title: 'Premium',
        time: 'Handled with care',
        description: 'Special handling for valuable items',
        price: 'Starting ₹75',
        color: 'bg-purple-100 text-purple-600',
    },
];

const ServiceTypes = ({ services = defaultServices }) => {
    return (
        <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServiceTypes;
