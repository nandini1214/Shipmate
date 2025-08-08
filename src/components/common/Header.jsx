import React, { useEffect, useState } from "react";
import {
    Truck,
    Menu,
    X,
    Bell,
    User,
    DollarSign,
    ChevronDown,
    LogOut,
    Settings,
    HelpCircle,
    Package,
    MessageSquare,
    Home,
    Download,
    LogIn,
    Contact,
    Star,
    Shield,
    Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({
    userType,
    user = {},
    activeTab = "Home",
    setActiveTab = () => { },
    onLogout = () => { },
    customNavItems = null,
    showNavigation = true,
    showUserMenu = true,
    showNotifications = true,
    className = "",
}) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navConfig = {
        homepage: [
            { id: "home", label: "Home", icon: Home },
            { id: "services", label: "Services", icon: Package },
            { id: "about", label: "About", icon: MessageSquare },
            { id: "contact", label: "Contact", icon: Contact },
        ],
        delivery: [],
        admin: [],
    };

    const menuConfig = {
        delivery: [
            { id: "earnings", label: "Earnings", icon: DollarSign },
            { id: "ratings", label: "Ratings", icon: Star },
        ],
        admin: [
            { id: "system", label: "System Settings", icon: Shield },
            { id: "users", label: "User Management", icon: Users },
        ],
    };

    const defaultUserInfo = {
        name:
            user.first_name ||
            {
                homepage: "Guest",
                delivery: "Delivery Partner",
                admin: "Administrator",
            }[userType],
        subtitle: {
            homepage: "Welcome to QuickDeliver!",
            delivery: "Download our delivery app",
            admin: "System Control",
        }[userType],
        credits: user.credits || 0,
        avatar: user?.profile_image,
        phone: user.contact,
        email: user.email,
    };

    const navItems = customNavItems || navConfig[userType] || [];
    const userMenuItems =
        userType !== "homepage"
            ? [
                ...(menuConfig[userType] || []),
                { id: "profile", label: "Profile", icon: User },
                { id: "settings", label: "Settings", icon: Settings },
                { id: "help", label: "Help & Support", icon: HelpCircle },
                { id: "logout", label: "Logout", icon: LogOut, isDanger: true },
            ]
            : [];

    const handleUserMenuClick = (id) => {
        if (id === "logout") onLogout();
        else setActiveTab(id);
        setIsUserMenuOpen(false);
    };

    const gradient = "from-purple-600 to-indigo-600";

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20"
                : "bg-transparent"
                } ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${gradient}`}>
                        <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">QuickDeliver</h1>
                        <p className="text-sm text-gray-500 hidden sm:block">
                            {defaultUserInfo.subtitle}
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                {showNavigation && (
                    <nav className="hidden md:flex space-x-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === item.id
                                    ? "text-blue-600 bg-gray-100 font-semibold"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                )}

                {/* Right Controls */}
                <div className="flex items-center space-x-3">
                    {userType === "homepage" && (
                        <button
                            onClick={() => navigate("/login")}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <LogIn className="w-5 h-5" />
                            Login
                        </button>
                    )}


                    {showNotifications && userType === "admin" && (
                        <button className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                    )}

                    {showUserMenu && userType !== "homepage" && (
                        <div className="relative">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                            >
                                {defaultUserInfo.avatar ? (
                                    <img
                                        src={defaultUserInfo.avatar}
                                        alt="Avatar"
                                        className="w-6 h-6 rounded-full"
                                    />
                                ) : (
                                    <div
                                        className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
                                    >
                                        <User className="w-3 h-3 text-white" />
                                    </div>
                                )}
                                <span className="hidden sm:block text-sm font-medium">
                                    {defaultUserInfo.name}
                                </span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 z-50">
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="text-sm font-medium">{defaultUserInfo.name}</p>
                                        {defaultUserInfo.email && (
                                            <p className="text-xs text-gray-600">
                                                {defaultUserInfo.email}
                                            </p>
                                        )}
                                        {defaultUserInfo.phone && (
                                            <p className="text-xs text-gray-600">
                                                {defaultUserInfo.phone}
                                            </p>
                                        )}
                                    </div>
                                    {userMenuItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleUserMenuClick(item.id)}
                                            className={`w-full flex items-center space-x-3 px-4 py-2 text-sm ${item.isDanger
                                                ? "text-red-600 hover:bg-red-50"
                                                : "text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && showNavigation && (
                <div className="md:hidden border-t border-gray-200 py-4">
                    <nav className="flex flex-col gap-2 px-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition ${activeTab === item.id
                                    ? `bg-gradient-to-r ${gradient} text-white`
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            {(isUserMenuOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsMobileMenuOpen(false);
                    }}
                />
            )}
        </header>
    );
};

export default Header;
