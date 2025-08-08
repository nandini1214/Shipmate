import { History } from "lucide-react";
import OrderCard from "./card/OrderCard";


const RecentOrders = ({ orders = [], onViewAll }) => {
    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
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
                <p className="text-sm text-gray-500">No recent orders found.</p>
            ) : (
                <div className="space-y-3">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default RecentOrders;
