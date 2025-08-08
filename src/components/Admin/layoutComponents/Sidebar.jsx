import { LogOut, Package, Settings, Store, TrendingUp, Truck, TruckIcon, UserCheck, Users } from 'lucide-react';
import React from 'react'

function Sidebar({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
        { id: 'order', label: 'Orders', icon: Package },
        { id: 'driver', label: 'Drivers', icon: Users },
        // { id: 'store', label: 'Partners', icon: Store },
        // { id: 'customer', label: 'Customers', icon: UserCheck },
        { id: 'analytic', label: 'Analytics', icon: TrendingUp },
        { id: 'vehicle', label: 'Vehicles', icon: TruckIcon },

    ];
    return (
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
            <div className="flex h-full flex-col">
                {/* Logo */}
                {/* <div className="flex h-16 items-center justify-center border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <Truck className="h-8 w-8 text-indigo-600" />
                        <span className="text-xl font-bold text-gray-900">DeliveryAdmin</span>
                    </div>
                </div> */}

                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-4 py-6">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${activeTab === item.id
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Bottom menu */}
                <div className="border-t border-gray-200 p-4">
                    <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Settings className="mr-3 h-5 w-5" />
                        Settings
                    </button>
                    <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                        <LogOut className="mr-3 h-5 w-5" />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar