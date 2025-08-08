import React, { useCallback, useEffect, useState } from "react";
import {
    Package,
    Truck,
    Clock,
    DollarSign,
    MapPin,
    User,
    Power,
    Navigation,
    Star,
    TrendingUp,
    Calendar,
    Phone,
    MessageCircle,
    CheckCircle,
    AlertCircle,
    Play,
    Pause,
    Target,
    Zap,
    Award,
    Handshake,
    HandHeart,
    Sparkle,
} from "lucide-react";

import ActiveDeliveryCard from "./card/ActiveDeliveryCard";
import DeliveryRequestCard from "./card/DeliveryRequestCard";

import Header from "../common/Header";
import StatCard from "../common/StatCard";
import QuickActions from "../common/QuickActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Slices/auth/authSlice";

// StatCard component from your theme - for driver earnings and metrics
// function StatCard({ title, value, icon: Icon, change, color }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-600">{title}</p>
//           <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
//           {change && (
//             <p className={`text-sm mt-2 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
//               {change}
//             </p>
//           )}
//         </div>
//         <div className={`${color} rounded-lg p-3`}>
//           <Icon className="h-6 w-6 text-white" />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Delivery Request Card
// function DeliveryRequestCard({ request, onAccept, onDecline }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center space-x-3">
//           <div className="bg-blue-500 rounded-lg p-2">
//             <Package className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900">Order #{request.id}</h3>
//             <p className="text-sm text-gray-600">{request.restaurant}</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-bold text-green-600">₹{request.earnings}</p>
//           <p className="text-sm text-gray-600">{request.distance}</p>
//         </div>
//       </div>

//       <div className="space-y-2 mb-4">
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <MapPin className="h-4 w-4" />
//           <span>Pickup: {request.pickup}</span>
//         </div>
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <Navigation className="h-4 w-4" />
//           <span>Drop: {request.dropoff}</span>
//         </div>
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <Clock className="h-4 w-4" />
//           <span>Est. Time: {request.estimatedTime}</span>
//         </div>
//       </div>

//       <div className="flex space-x-3">
//         <button
//           onClick={() => onDecline(request.id)}
//           className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
//         >
//           Decline
//         </button>
//         <button
//           onClick={() => onAccept(request.id)}
//           className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// }

// // Active Delivery Card
// function ActiveDeliveryCard({ delivery }) {
//   const statusSteps = ['pickup', 'in-transit', 'delivered'];
//   const currentStepIndex = statusSteps.indexOf(delivery.status);

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center space-x-3">
//           <div className="bg-orange-500 rounded-lg p-2">
//             <Truck className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900">Order #{delivery.id}</h3>
//             <p className="text-sm text-gray-600">{delivery.customer}</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-bold text-green-600">₹{delivery.earnings}</p>
//           <p className="text-sm text-gray-600">{delivery.timeRemaining} left</p>
//         </div>
//       </div>

//       {/* Progress Steps */}
//       <div className="flex items-center mb-4">
//         {statusSteps.map((step, index) => (
//           <React.Fragment key={step}>
//             <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
//               index <= currentStepIndex
//                 ? 'bg-green-500 text-white'
//                 : 'bg-gray-200 text-gray-600'
//             }`}>
//               {index < currentStepIndex ? <CheckCircle className="h-4 w-4" /> : index + 1}
//             </div>
//             {index < statusSteps.length - 1 && (
//               <div className={`flex-1 h-1 mx-2 ${
//                 index < currentStepIndex ? 'bg-green-500' : 'bg-gray-200'
//               }`} />
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <div className="space-y-2 mb-4">
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <MapPin className="h-4 w-4" />
//           <span>{delivery.currentLocation}</span>
//         </div>
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <Navigation className="h-4 w-4" />
//           <span>Next: {delivery.nextDestination}</span>
//         </div>
//       </div>

//       <div className="flex space-x-2">
//         <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
//           <Navigation className="h-4 w-4" />
//           <span>Navigate</span>
//         </button>
//         <button className="bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors">
//           <Phone className="h-4 w-4" />
//         </button>
//         <button className="bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors">
//           <MessageCircle className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// }

export default function AgentMain() {
    const dispatch = useDispatch();
    const [isOnline, setIsOnline] = useState(true);
    const [activeTab, setActiveTab] = useState("home");
    const { id } = useParams();

    const { users } = useSelector((state) => state.auth);
    console.log(users);
    // Driver earnings and performance stats using your StatCard component
    const stats = [
        {
            title: "Today's Earnings",
            value: "₹1,247",
            icon: DollarSign,
            change: "+18% from yesterday",
            color: "bg-green-500",
        },
        {
            title: "Deliveries",
            value: "12",
            icon: Package,
            change: "+3 from yesterday",
            color: "bg-blue-500",
        },
        {
            title: "Hours Online",
            value: "6.5h",
            icon: Clock,
            change: "Target: 8h",
            color: "bg-purple-500",
        },
        {
            title: "Rating",
            value: "4.8",
            icon: Star,
            change: "Based on 47 reviews",
            color: "bg-orange-500",
        },
    ];
    const driverQuickActions = [
        {
            icon: Target,
            title: "Set Goals",
            subtitle: "Daily targets",
            bgColor: "bg-blue-50",
            hoverColor: "hover:bg-blue-100",
            textColor: "text-blue-700",
            subtitleColor: "text-blue-600",
        },
        {
            icon: TrendingUp,
            title: "Earnings",
            subtitle: "View reports",
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-green-100",
            textColor: "text-green-700",
            subtitleColor: "text-green-600",
        },
        {
            icon: Calendar,
            title: "Schedule",
            subtitle: "Plan shifts",
            bgColor: "bg-purple-50",
            hoverColor: "hover:bg-purple-100",
            textColor: "text-purple-700",
            subtitleColor: "text-purple-600",
        },
        {
            icon: Award,
            title: "Rewards",
            subtitle: "Check points",
            bgColor: "bg-orange-50",
            hoverColor: "hover:bg-orange-100",
            textColor: "text-orange-700",
            subtitleColor: "text-orange-600",
        },
    ];
    const deliveryRequests = [
        {
            id: "DEL-2024-4851",
            restaurant: "Burger Palace",
            pickup: "MG Road, Sector 14",
            dropoff: "Palm Heights, Sector 23",
            distance: "2.3 km",
            earnings: "89",
            estimatedTime: "25 min",
        },
        {
            id: "DEL-2024-4852",
            restaurant: "Spice Garden",
            pickup: "City Center Mall",
            dropoff: "Silver Oaks, Sector 45",
            distance: "3.7 km",
            earnings: "124",
            estimatedTime: "32 min",
        },
    ];

    const activeDelivery = {
        id: "DEL-2024-4848",
        customer: "Priya Sharma",
        currentLocation: "Heading to customer",
        nextDestination: "Palm Heights, Sector 23",
        earnings: "95",
        timeRemaining: "12 min",
        status: "in-transit",
    };

    const handleAcceptRequest = (requestId) => {
        console.log("Accepted request:", requestId);
    };

    const handleDeclineRequest = (requestId) => {
        console.log("Declined request:", requestId);
    };
    useEffect(() => {
        dispatch(getUsers({ id: id }));
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header
                userType="delivery"
                user={users[0]}
                activeTab="deliveries"
                setActiveTab={setActiveTab}
            />

            {/* <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-600 rounded-lg p-2">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">QuickDeliver Partner</h1>
                                <p className="text-xs text-gray-600">Driver Dashboard</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                             Online/Offline Toggle
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Status:</span>
                <button
                    onClick={() => setIsOnline(!isOnline)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${isOnline
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                >
                    {isOnline ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                    <span>{isOnline ? 'Online' : 'Offline'}</span>
                </button>
            </div> 

                            <button className="p-2 text-gray-600 hover:text-gray-900">
                                <User className="h-5 w-5" />
                            </button>
                        </div>
                    </div >
                </div >
            </header > */}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Welcome Section */}


                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                        <span>
                            Good afternoon{users?.[0]?.first_name ? `, ${users[0].first_name}` : ''}!
                        </span>
                        <Sparkle className="w-6 h-6 text-yellow-500 ml-2" />
                    </h2>
                    <p className="text-gray-600">
                        You're doing great today! Keep up the excellent work.
                    </p>
                </div>


                {/* Stats Grid using your StatCard component */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Delivery Requests & Active Delivery */}
                    <div>
                        {/* Active Delivery */}
                        {activeDelivery && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                    <Truck className="h-5 w-5 text-orange-500" />
                                    <span>Active Delivery</span>
                                </h3>
                                <ActiveDeliveryCard delivery={activeDelivery} />
                            </div>
                        )}

                        {/* Delivery Requests */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Package className="h-5 w-5 text-blue-500" />
                                <span>New Delivery Requests</span>
                                {!isOnline && (
                                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                                        Go online to see requests
                                    </span>
                                )}
                            </h3>

                            {isOnline ? (
                                <div>
                                    {deliveryRequests.map((request) => (
                                        <DeliveryRequestCard
                                            key={request.id}
                                            request={request}
                                            onAccept={handleAcceptRequest}
                                            onDecline={handleDeclineRequest}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-100 rounded-xl p-8 text-center">
                                    <Power className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600 mb-4">You're currently offline</p>
                                    <button
                                        onClick={() => setIsOnline(true)}
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Go Online
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Performance & Quick Actions */}
                    <div className="space-y-8">
                        {/* Quick Actions */}
                        <QuickActions actions={driverQuickActions} />

                        {/* Performance Summary */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Today's Performance
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Acceptance Rate</span>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                                            <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-medium">92%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">On-Time Rate</span>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                                            <div className="w-22 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-medium">96%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Customer Rating</span>
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Incentives */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                            <div className="flex items-center space-x-3 mb-3">
                                <Zap className="h-6 w-6" />
                                <h3 className="text-lg font-semibold">Peak Hours Bonus</h3>
                            </div>
                            <p className="text-green-100 mb-4">
                                Earn extra ₹50 per delivery during 7-9 PM today!
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Progress: 2/5 deliveries</span>
                                <div className="w-20 h-2 bg-green-400 rounded-full">
                                    <div className="w-8 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
        </div>
    );
}
