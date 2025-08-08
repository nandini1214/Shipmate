import { Package, User, Star } from "lucide-react";

const getStatusColor = (status) => {
    switch (status) {
        case 'assigned': return 'text-blue-600 bg-blue-100';
        case 'picked': return 'text-orange-600 bg-orange-100';
        case 'delivered': return 'text-green-600 bg-green-100';
        default: return 'text-gray-600 bg-gray-100';
    }
};

const getStatusText = (status) => {
    switch (status) {
        case 'assigned': return 'Partner Assigned';
        case 'picked': return 'Item Picked Up';
        case 'delivered': return 'Delivered';
        default: return 'Processing';
    }
};

const OrderCard = ({ order, onTrack }) => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">#{order.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                    </span>
                </div>
                <span className="text-sm font-semibold text-gray-900">₹{order.amount}</span>
            </div>

            <div className="flex items-start space-x-3 mb-3">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">From: {order.pickup}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">To: {order.dropoff}</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-600">ETA</p>
                    <p className="text-sm font-semibold text-orange-600">{order.estimatedTime}</p>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">{order.partner}</span>
                    <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{order.rating}</span>
                    </div>
                </div>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => onTrack(order)}
                >
                    Track Live
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
