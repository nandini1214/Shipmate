import React, { useState, useEffect } from 'react';
import {
    MapPin,
    Package,
    Clock,
    Star,
    Bell,
    User,
    CreditCard,
    Truck,
    Plus,
    Search,
    Filter,
    ChevronRight,
    Gift,
    Zap,
    Shield,
    Phone,
    Mail,
    Calendar,
    DollarSign,
    Navigation,
    CheckCircle,
    AlertCircle,
    History,
    Home,
    Menu,
    X
} from 'lucide-react';
import UniversalHeader from '../common/Header';
import Header from '../common/Header';
import QuickActions from '../common/QuickActions';
import ActiveOrders from './components/ActiveOrders';
import NewDeliveryForm from './components/NewDeliveryForm';
import RecentOrders from './components/RecentOrders';
import Support from './components/Support';
import ServiceTypes from './components/ServiceTypes';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Slices/auth/authSlice';


// Header Component
// const Header = ({ activeTab, setActiveTab, user }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const navItems = [
//         { id: 'home', label: 'Home', icon: Home },
//         { id: 'orders', label: 'Orders', icon: Package },
//         { id: 'new', label: 'New', icon: Plus },
//         { id: 'notifications', label: 'Alerts', icon: Bell },
//         { id: 'profile', label: 'Profile', icon: User }
//     ];

//     return (
//         <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
//             <div className="max-w-4xl mx-auto px-4 py-4">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center space-x-3">
//                         <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-2">
//                             <Truck className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-bold text-gray-900">QuickDeliver</h1>
//                             <p className="text-sm text-gray-600 hidden sm:block">Welcome back, {user.name}!</p>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden md:flex items-center space-x-1">
//                         {navItems.map((item) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => setActiveTab(item.id)}
//                                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === item.id
//                                         ? 'bg-blue-600 text-white shadow-md'
//                                         : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                                     }`}
//                             >
//                                 <item.icon className="h-4 w-4" />
//                                 <span>{item.label}</span>
//                                 {item.id === 'notifications' && (
//                                     <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                                 )}
//                             </button>
//                         ))}
//                     </nav>

//                     {/* User Info & Credits */}
//                     <div className="flex items-center space-x-3">
//                         <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
//                             <DollarSign className="h-4 w-4 text-green-600" />
//                             <span className="text-sm font-medium text-green-700">₹{user.credits}</span>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                         >
//                             {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
//                         <nav className="grid grid-cols-2 gap-2">
//                             {navItems.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     onClick={() => {
//                                         setActiveTab(item.id);
//                                         setIsMobileMenuOpen(false);
//                                     }}
//                                     className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === item.id
//                                             ? 'bg-blue-600 text-white'
//                                             : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                                         }`}
//                                 >
//                                     <item.icon className="h-4 w-4" />
//                                     <span>{item.label}</span>
//                                     {item.id === 'notifications' && (
//                                         <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                                     )}
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };




// Main Component
const CustomerHomePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('home');
    const { users } = useSelector((state) => state.auth)
    const [activeOrders, setActiveOrders] = useState([
        {
            id: 'QD001',
            status: 'picked',
            pickup: 'Rajwada Palace, Indore',
            dropoff: 'Vijay Nagar, Indore',
            partner: 'Rahul Sharma',
            rating: 4.8,
            estimatedTime: '15 mins',
            itemType: 'Documents',
            amount: 35
        },
        {
            id: 'QD002',
            status: 'assigned',
            pickup: 'Sarafa Bazaar, Indore',
            dropoff: 'AB Road, Indore',
            partner: 'Priya Patel',
            rating: 4.9,
            estimatedTime: '25 mins',
            itemType: 'Parcel',
            amount: 45
        }
    ]);
    const actions = [
        {
            icon: Package,
            title: 'Send Package',
            subtitle: 'Documents, parcels & more',
            bgColor: 'bg-blue-50',
            hoverColor: 'hover:bg-blue-100',
            textColor: 'text-blue-700',
            subtitleColor: 'text-blue-600',
            action: 'package',
        },
        {
            icon: Zap,
            title: 'Express Delivery',
            subtitle: 'Urgent delivery in 30 mins',
            bgColor: 'bg-indigo-50',
            hoverColor: 'hover:bg-indigo-100',
            textColor: 'text-indigo-700',
            subtitleColor: 'text-indigo-600',
            action: 'express',
        },
        {
            icon: Calendar,
            title: 'Schedule Later',
            subtitle: 'Plan your delivery',
            bgColor: 'bg-teal-50',
            hoverColor: 'hover:bg-teal-100',
            textColor: 'text-teal-700',
            subtitleColor: 'text-teal-600',
            action: 'schedule',
        },
        {
            icon: Gift,
            title: 'Gift Delivery',
            subtitle: 'Special occasion delivery',
            bgColor: 'bg-pink-50',
            hoverColor: 'hover:bg-pink-100',
            textColor: 'text-pink-700',
            subtitleColor: 'text-pink-600',
            action: 'gift',
        },
    ];
    const [user, setUser] = useState({
        name: 'Amit Kumar',
        phone: '+91 9876543210',
        email: 'amit@example.com',
        credits: 120,
        address: 'Vijay Nagar, Indore, MP'
    });

    const [recentOrders] = useState([
        {
            id: 'QD098',
            date: '2025-07-30',
            pickup: 'Rajwada Palace',
            dropoff: 'Palasia Square',
            status: 'delivered',
            amount: 40,
            rating: 5
        },
        {
            id: 'QD097',
            date: '2025-07-29',
            pickup: 'Treasure Island Mall',
            dropoff: 'Bhawar Kuan',
            status: 'delivered',
            amount: 30,
            rating: 4
        }
    ]);

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="space-y-6">
                        <QuickActions actions={actions} />
                        <ActiveOrders orders={activeOrders} />
                        <NewDeliveryForm />
                        <ServiceTypes />
                        <RecentOrders orders={recentOrders} />
                        <Support />
                    </div>
                );
            case 'orders':
                return (
                    <div className="space-y-6 ">
                        <ActiveOrders orders={activeOrders} />
                        <RecentOrders orders={recentOrders} />
                    </div>
                );
            case 'new':
                return (
                    <div className="space-y-6">
                        <NewDeliveryForm />
                        <ServiceTypes />
                        <QuickActions actions={actions} />
                    </div>
                );
            case 'notifications':
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No New Notifications</h3>
                            <p className="text-gray-600">You're all caught up!</p>
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <User className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                    <p className="text-gray-600">{user.phone}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium text-gray-900 mb-2">Default Address</h4>
                                    <p className="text-gray-600">{user.address}</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-gray-900 mb-2">Available Credits</h4>
                                    <p className="text-2xl font-bold text-green-600">₹{user.credits}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    useEffect(() => {
        dispatch(getUsers({ id: id }));
    }, [id]);
    return (
        <div className="min-h-screen bg-gray-50">
            <Header userType={"customer"} user={users[0]} activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {renderContent()}
            </div>
        </div>
    );
};

export default CustomerHomePage;