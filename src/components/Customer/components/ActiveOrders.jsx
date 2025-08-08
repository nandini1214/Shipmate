import { Package } from "lucide-react";
import OrderCard from "./card/OrderCard";
import { History } from "lucide-react";

const ActiveOrders = ({ orders = [], onViewAll, onTrackOrder }) => {
    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Active Orders</h2>
                {orders.length > 0 && (
                    <button
                        className="flex items-center space-x-2 text-blue-600 text-sm font-medium hover:text-blue-700"
                        onClick={onViewAll}
                    >
                        <History className="h-4 w-4" />
                        <span>View All</span>
                    </button>
                )}
            </div>

            {orders.length === 0 ? (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No active orders</p>
                    <p className="text-sm text-gray-500">Your current deliveries will appear here</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} onTrack={onTrackOrder} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ActiveOrders;
