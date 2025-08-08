import { Clock, DollarSign, Package, Users } from "lucide-react"
import OrdersTable from "../TableComponents/OrdersTable"
import StatCard from "../../common/StatCard"



function DashboardPage({ stats, recentOrders }) {
    console.log("hey")
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Orders"
                    value={stats.totalOrders.toLocaleString()}
                    icon={Package}
                    change="+12%"
                    color="bg-blue-500"
                />
                <StatCard
                    title="Active Drivers"
                    value={stats.activeDrivers}
                    icon={Users}
                    change="+5%"
                    color="bg-green-500"
                />
                <StatCard
                    title="Revenue"
                    value={`$${stats.totalRevenue.toLocaleString()}`}
                    icon={DollarSign}
                    change="+18%"
                    color="bg-purple-500"
                />
                <StatCard
                    title="Avg Delivery Time"
                    value={`${stats.avgDeliveryTime} min`}
                    icon={Clock}
                    change="-3%"
                    color="bg-orange-500"
                />
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                </div>
                <OrdersTable orders={recentOrders} />
            </div>
        </div>
    )
}

export default DashboardPage