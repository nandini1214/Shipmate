import React, { useState, useEffect } from "react";
import {
  Store,
  BarChart3,
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Truck,
  ShoppingCart,
  Bell,
  Settings,
  Download,
  Upload,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  User,
  Menu,
  Navigation,
  Timer,
  AlertTriangle,
  Plug,
} from "lucide-react";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import QuickActions from "../common/QuickActions";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Slices/auth/authSlice";

// Sample Data
const initialStoreInfo = {
  name: "Fresh Mart Grocery",
  category: "Grocery & Food",
  phone: "+91 98765 43210",
  email: "freshmart@example.com",
  address: "123 Main Street, Indore, MP 452001",
  website: "www.freshmart.com",
  rating: 4.5,
  earnings: "25,480",
  deliveryZone: "5km radius",
  avgDeliveryTime: "25 mins",
  isActive: true,
};

const initialOrders = [
  {
    id: "ORD001",
    customer: {
      name: "Rajesh Kumar",
      phone: "+91 98765 12345",
      address: "45 Park Street, Indore",
    },
    items: [
      { name: "Basmati Rice", qty: 2 },
      { name: "Cooking Oil", qty: 1 },
    ],
    total: 850,
    status: "pending",
    date: "2025-08-01",
    time: "14:30",
    deliveryPartner: null,
    estimatedDelivery: "15:00",
    priority: "normal",
  },
  {
    id: "ORD002",
    customer: {
      name: "Priya Sharma",
      phone: "+91 98765 67890",
      address: "78 Garden Road, Indore",
    },
    items: [
      { name: "Fresh Vegetables", qty: 3 },
      { name: "Milk", qty: 2 },
    ],
    total: 420,
    status: "confirmed",
    date: "2025-08-01",
    time: "13:45",
    deliveryPartner: "Ravi Singh",
    estimatedDelivery: "14:30",
    priority: "high",
  },
  {
    id: "ORD003",
    customer: {
      name: "Amit Patel",
      phone: "+91 98765 54321",
      address: "12 Market Square, Indore",
    },
    items: [
      { name: "Snacks", qty: 5 },
      { name: "Beverages", qty: 3 },
    ],
    total: 650,
    status: "shipping",
    date: "2025-08-01",
    time: "12:00",
    deliveryPartner: "Suresh Kumar",
    estimatedDelivery: "13:30",
    priority: "normal",
  },
];

const initialInventory = [
  {
    id: 1,
    name: "Basmati Rice",
    category: "Grains",
    price: 120,
    stock: 45,
    minStock: 10,
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    category: "Produce",
    price: 80,
    stock: 25,
    minStock: 15,
  },
  {
    id: 3,
    name: "Cooking Oil",
    category: "Cooking",
    price: 180,
    stock: 8,
    minStock: 5,
  },
  {
    id: 4,
    name: "Milk",
    category: "Dairy",
    price: 55,
    stock: 30,
    minStock: 20,
  },
];

const initialAnalytics = {
  todayRevenue: 1920,
  totalSales: 45600,
  bestSelling: "Basmati Rice",
  satisfaction: 4.5,
  totalDeliveries: 156,
  avgDeliveryTime: 25,
  deliverySuccess: 98.5,
};

// Universal Header Component
// const StoreHeader = ({ activeTab, setActiveTab, storeInfo }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { id: "dashboard", label: "Dashboard", icon: BarChart3 },
//     { id: "orders", label: "Orders", icon: Package },
//     { id: "inventory", label: "Inventory", icon: Store },
//     { id: "delivery", label: "Delivery", icon: Truck },
//     { id: "analytics", label: "Analytics", icon: TrendingUp },
//     { id: "profile", label: "Profile", icon: User },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4">
//           <div className="flex items-center space-x-3">
//             <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-2">
//               <Store className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">
//                 QuickDeliver Store
//               </h1>
//               <p className="text-sm text-gray-600 hidden sm:block">
//                 {storeInfo.name}
//               </p>
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   activeTab === item.id
//                     ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md"
//                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                 }`}
//               >
//                 <item.icon className="h-4 w-4" />
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-3">
//             <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
//               <DollarSign className="h-4 w-4 text-green-600" />
//               <span className="text-sm font-medium text-green-700">
//                 ₹{storeInfo.earnings}
//               </span>
//             </div>

//             <button className="relative p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
//             </button>

//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4">
//             <nav className="grid grid-cols-2 gap-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                     activeTab === item.id
//                       ? "bg-gradient-to-r from-green-600 to-blue-600 text-white"
//                       : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                   }`}
//                 >
//                   <item.icon className="h-4 w-4" />
//                   <span>{item.label}</span>
//                 </button>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// Dashboard Component
const Dashboard = ({ storeInfo, orders, analytics }) => {
  const statsCards = [
    {
      title: "Total Orders",
      value: orders.length,
      change: "+12%",
      positive: true,
      icon: Package,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      title: "Today's Revenue",
      value: `₹${analytics.todayRevenue}`,
      change: "+8%",
      positive: true,
      icon: DollarSign,
      color: "bg-gradient-to-r from-green-500 to-green-600",
    },
    {
      title: "Active Deliveries",
      value: orders.filter((o) => o.status === "shipping").length,
      change: "+5%",
      positive: true,
      icon: Truck,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
    {
      title: "Delivery Success",
      value: `${analytics.deliverySuccess}%`,
      change: "+0.5%",
      positive: true,
      icon: CheckCircle,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
  ];
  const actions = [
    // {
    //   icon: Plus,
    //   title: 'Add New Product',
    //   subtitle: 'Expand your inventory',
    //   bgColor: 'bg-gradient-to-r from-green-600 to-blue-600',
    //   hoverColor: 'hover:from-green-700 hover:to-blue-700',
    //   textColor: 'text-white',
    //   subtitleColor: 'text-green-100',
    //   action: 'add_product',
    // },
    {
      icon: Truck,
      title: "Track Deliveries",
      subtitle: "Monitor active orders",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      textColor: "text-green-700",
      subtitleColor: "text-green-600",
      borderColor: "border-2 border-green-200",
      action: "track_deliveries",
    },
    {
      icon: Plug,
      title: "Api Integration",
      subtitle: "Integrate Api in your website",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      textColor: "text-blue-700",
      subtitleColor: "text-blue-600",
      borderColor: "border-2 border-gray-200",
      action: "api_integration",
    },
    // {
    //   icon: Settings,
    //   title: 'Store Settings',
    //   subtitle: 'Manage preferences',
    //   bgColor: 'bg-white',
    //   hoverColor: 'hover:border-blue-300 hover:bg-blue-50',
    //   textColor: 'text-gray-900',
    //   subtitleColor: 'text-gray-600',
    //   borderColor: 'border-2 border-gray-200',
    //   action: 'store_settings',
    // },
  ];
  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Store Status Banner */}
      <div
        className={`p-4 rounded-xl ${storeInfo.isActive
          ? "bg-green-50 border border-green-200"
          : "bg-red-50 border border-red-200"
          }`}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`h-3 w-3 rounded-full ${storeInfo.isActive ? "bg-green-500" : "bg-red-500"
              }`}
          ></div>
          <span
            className={`font-medium ${storeInfo.isActive ? "text-green-800" : "text-red-800"
              }`}
          >
            Store is {storeInfo.isActive ? "Active" : "Inactive"} • Delivery
            Zone: {storeInfo.deliveryZone}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 200} />
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h3>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              View All
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">#{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {order.customer.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {order.time} • Est: {order.estimatedDelivery}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{order.total}</p>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${order.status === "delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "shipping"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "confirmed"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                  >
                    {order.status}
                  </span>
                  {order.priority === "high" && (
                    <span className="ml-2 inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      Priority
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions actions={actions} />
    </div>
  );
};

// Orders Component
const Orders = ({ orders, setOrders }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "shipping":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by order ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipping">Shipping</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer & Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items & Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Partner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">
                        #{order.id}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.date} • {order.time}
                      </div>
                      <div className="text-xs text-gray-500">
                        Est: {order.estimatedDelivery}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">
                        {order.customer.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.customer.phone}
                      </div>
                      <div className="text-xs text-gray-500 max-w-xs truncate">
                        {order.customer.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">
                        {order.items.length} items
                      </div>
                      <div className="font-medium text-gray-900">
                        ₹{order.total}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.deliveryPartner || "Not Assigned"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                      {order.priority === "high" && (
                        <div>
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Priority
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateOrderStatus(order.id, "confirmed")}
                        className="text-green-600 hover:text-green-900"
                        disabled={order.status === "delivered"}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Delivery Component (New)
const Delivery = ({ orders }) => {
  const activeDeliveries = orders.filter(
    (order) => order.status === "shipping"
  );
  const pendingAssignment = orders.filter(
    (order) => order.status === "confirmed" && !order.deliveryPartner
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Delivery Management
        </h2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
            <Truck className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              {activeDeliveries.length} Active
            </span>
          </div>
        </div>
      </div>

      {/* Pending Assignment */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>
              Pending Delivery Assignment ({pendingAssignment.length})
            </span>
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingAssignment.map((order) => (
            <div key={order.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Timer className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      #{order.id} - {order.customer.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.customer.address}
                    </p>
                    <p className="text-xs text-gray-500">
                      Ordered: {order.time} • Est: {order.estimatedDelivery}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{order.total}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Assign Partner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Deliveries */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Navigation className="h-5 w-5 text-blue-500" />
            <span>Active Deliveries ({activeDeliveries.length})</span>
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {activeDeliveries.map((order) => (
            <div key={order.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      #{order.id} - {order.customer.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Partner: {order.deliveryPartner}
                    </p>
                    <p className="text-xs text-gray-500">
                      {order.customer.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ₹{order.total}
                    </p>
                    <p className="text-xs text-gray-500">
                      Est: {order.estimatedDelivery}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Track
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inventory Component
// const Inventory = ({ inventory, setInventory }) => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredInventory = inventory.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const lowStockItems = inventory.filter((item) => item.stock <= item.minStock);

//   const AddProductModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl max-w-md w-full p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-gray-900">
//             Add New Product
//           </h3>
//           <button onClick={() => setShowAddModal(false)}>
//             <X className="h-6 w-6 text-gray-400" />
//           </button>
//         </div>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Product Name
//             </label>
//             <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Category
//             </label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
//               <option>Grocery</option>
//               <option>Produce</option>
//               <option>Dairy</option>
//               <option>Cooking</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Price (₹)
//             </label>
//             <input
//               type="number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Stock Quantity
//             </label>
//             <input
//               type="number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Minimum Stock Alert
//             </label>
//             <input
//               type="number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex space-x-3 pt-4">
//             <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
//               Add Product
//             </button>
//             <button
//               onClick={() => setShowAddModal(false)}
//               className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-900">
//           Inventory Management
//         </h2>
//         <div className="flex items-center space-x-3">
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             <Plus className="h-4 w-4" />
//             <span>Add Product</span>
//           </button>
//         </div>
//       </div>

//       {/* Low Stock Alert */}
//       {lowStockItems.length > 0 && (
//         <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//           <div className="flex items-center space-x-3">
//             <AlertTriangle className="h-5 w-5 text-red-500" />
//             <div>
//               <h3 className="font-semibold text-red-800">Low Stock Alert</h3>
//               <p className="text-sm text-red-700">
//                 {lowStockItems.length} items are running low on stock
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Search */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <div className="relative">
//           <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredInventory.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Package className="h-6 w-6 text-blue-600" />
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MoreVertical className="h-5 w-5" />
//               </button>
//             </div>
//             <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
//             <p className="text-sm text-gray-600 mb-4">{product.category}</p>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-lg font-bold text-gray-900">
//                   ₹{product.price}
//                 </p>
//                 <p
//                   className={`text-sm ${
//                     product.stock > product.minStock
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {product.stock} in stock
//                   {product.stock <= product.minStock && (
//                     <span className="ml-1 text-red-500">⚠️</span>
//                   )}
//                 </p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
//                   <Edit className="h-4 w-4" />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
//                   <Eye className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showAddModal && <AddProductModal />}
//     </div>
//   );
// };

// Analytics Component
const Analytics = ({ analytics }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>

      {/* Delivery Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Total Deliveries</h4>
          <p className="text-3xl font-bold text-blue-600">
            {analytics.totalDeliveries}
          </p>
          <p className="text-sm text-gray-600 mt-2">This month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-2">
            Avg Delivery Time
          </h4>
          <p className="text-3xl font-bold text-orange-600">
            {analytics.avgDeliveryTime} min
          </p>
          <p className="text-sm text-gray-600 mt-2">Target: 30 min</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Success Rate</h4>
          <p className="text-3xl font-bold text-green-600">
            {analytics.deliverySuccess}%
          </p>
          <p className="text-sm text-gray-600 mt-2">Successful deliveries</p>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Revenue & Order Trends
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">Revenue and order trends chart</p>
            <p className="text-sm text-gray-500">
              Integration with charting library needed
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            Top Performing Products
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Basmati Rice</span>
              <span className="text-sm font-medium text-gray-900">
                45 orders
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Fresh Vegetables</span>
              <span className="text-sm font-medium text-gray-900">
                38 orders
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Cooking Oil</span>
              <span className="text-sm font-medium text-gray-900">
                32 orders
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            Delivery Zones Performance
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Zone A (0-2km)</span>
              <span className="text-sm font-medium text-green-600">
                18 min avg
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Zone B (2-4km)</span>
              <span className="text-sm font-medium text-yellow-600">
                24 min avg
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Zone C (4-5km)</span>
              <span className="text-sm font-medium text-red-600">
                32 min avg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Component (Complete)
const Profile = ({ storeInfo, setStoreInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(storeInfo);

  const handleSave = () => {
    setStoreInfo(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Store Profile</h2>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isEditing ? (
            <Save className="h-4 w-4" />
          ) : (
            <Edit className="h-4 w-4" />
          )}
          <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Store Logo */}
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Store className="h-10 w-10 text-white" />
            </div>
            {isEditing && (
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Camera className="h-4 w-4" />
                <span>Change Logo</span>
              </button>
            )}
          </div>

          {/* Store Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{storeInfo.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              {isEditing ? (
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Grocery & Food">Grocery & Food</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Books & Stationery">Books & Stationery</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {storeInfo.category}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-900">{storeInfo.phone}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-900">{storeInfo.email}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              {isEditing ? (
                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <span className="text-gray-900">{storeInfo.address}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-900">{storeInfo.website}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Zone
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.deliveryZone}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryZone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">
                  {storeInfo.deliveryZone}
                </p>
              )}
            </div>
          </div>

          {/* Store Settings */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Store Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Store Status</h4>
                  <p className="text-sm text-gray-600">
                    Enable/disable store for new orders
                  </p>
                </div>
                <button
                  onClick={() =>
                    setFormData({ ...formData, isActive: !formData.isActive })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.isActive ? "bg-green-600" : "bg-gray-200"
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.isActive ? "translate-x-6" : "translate-x-1"
                      }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Delivery Time
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.avgDeliveryTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          avgDeliveryTime: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-900">
                        {storeInfo.avgDeliveryTime}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Rating
                  </label>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-900 font-medium">
                      {storeInfo.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      (Based on customer reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Partners Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Delivery Partners
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Partner Integration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Manage delivery partner preferences and settings
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Configure Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const StoreManagementApp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [storeInfo, setStoreInfo] = useState(initialStoreInfo);
  const [orders, setOrders] = useState(initialOrders);
  const [inventory, setInventory] = useState(initialInventory);
  const [analytics] = useState(initialAnalytics);
  const { users } = useSelector((state) => state.auth)
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            storeInfo={storeInfo}
            orders={orders}
            analytics={analytics}
          />
        );
      case "orders":
        return <Orders orders={orders} setOrders={setOrders} />;
      case "inventory":
      // return <Inventory inventory={inventory} setInventory={setInventory} />;
      case "delivery":
        return <Delivery orders={orders} />;
      case "analytics":
        return <Analytics analytics={analytics} />;
      case "profile":
        return <Profile storeInfo={storeInfo} setStoreInfo={setStoreInfo} />;
      default:
        return (
          <Dashboard
            storeInfo={storeInfo}
            orders={orders}
            analytics={analytics}
          />
        );
    }
  };
  useEffect(() => {
    dispatch(getUsers({ id: id }));
  }, [id]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        userType={"store"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={users[0]}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default StoreManagementApp;
