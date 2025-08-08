import {
    ArrowRight,
    Award,
    Calendar,
    Camera,
    CheckCircle,
    Clock,
    DollarSign,
    Eye,
    EyeOff,
    Gift,
    Globe,
    Heart,
    LayoutDashboard,
    Mail,
    MapPin,
    Navigation,
    Phone,
    Play,
    Send,
    Shield,
    Smartphone,
    Star,
    Store,
    TrendingUp,
    Truck,
    Upload,
    User,
    Users,
    Zap,
    Package,
    Target,
    Headphones,
    CreditCard,
    FileText,
    Settings
} from "lucide-react";
import { useState } from "react";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import FeatureCard from "./card/FeatureCard";







// Main Home Component
export default function Home() {
    const [activeTab, setActiveTab] = useState("home");
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [registrationStep, setRegistrationStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        vehicleType: "bike",
        city: "",
        experience: ""
    });

    // Enhanced stats for delivery service
    const serviceStats = [
        {
            title: "Average Partner Earnings",
            value: "₹45,000",
            icon: DollarSign,
            change: "Monthly potential",
            color: "bg-gradient-to-r from-green-500 to-emerald-500",
        },
        {
            title: "Active Partners",
            value: "25,000+",
            icon: Users,
            change: "Across 50+ cities",
            color: "bg-gradient-to-r from-blue-500 to-cyan-500",
        },
        {
            title: "Daily Deliveries",
            value: "1M+",
            icon: Package,
            change: "Orders processed",
            color: "bg-gradient-to-r from-orange-500 to-yellow-500",
        },
        {
            title: "Partner Rating",
            value: "4.8★",
            icon: Star,
            change: "Industry leading",
            color: "bg-gradient-to-r from-purple-500 to-pink-500",
        },
    ];

    const features = [
        {
            icon: Truck,
            title: "Multi-Modal Delivery",
            description: "Support for bikes, cars, trucks and specialized vehicles for different delivery needs and distances.",
            color: "bg-gradient-to-r from-blue-500 to-cyan-500",
        },
        {
            icon: Target,
            title: "Smart Route Optimization",
            description: "AI-powered routing system that maximizes earnings by finding the most efficient delivery routes.",
            color: "bg-gradient-to-r from-green-500 to-emerald-500",
        },
        {
            icon: CreditCard,
            title: "Instant Payments",
            description: "Get paid immediately after each delivery with zero processing fees and transparent earning structure.",
            color: "bg-gradient-to-r from-purple-500 to-indigo-500",
        },
        {
            icon: Shield,
            title: "Complete Insurance",
            description: "Comprehensive coverage for partners, vehicles, and packages with 24/7 emergency support.",
            color: "bg-gradient-to-r from-red-500 to-orange-500",
        },
        {
            icon: Award,
            title: "Performance Incentives",
            description: "Bonus system rewarding top performers with additional earnings and exclusive benefits.",
            color: "bg-gradient-to-r from-teal-500 to-lime-500",
        },
        {
            icon: Headphones,
            title: "24/7 Partner Support",
            description: "Dedicated support team available round the clock to assist with any delivery or technical issues.",
            color: "bg-gradient-to-r from-pink-500 to-rose-500",
        },
    ];

    const partnerRequirements = [
        "Age 21+ with valid driving license (minimum 2 years)",
        "Own vehicle with proper registration and insurance",
        "Smartphone with GPS and 4G connectivity",
        "Bank account for direct payment transfers",
        "Clean driving record and background verification",
        "Physical fitness for handling packages up to 25kg"
    ];

    const registrationSteps = [
        {
            step: 1,
            title: "Basic Information",
            description: "Personal details and contact information"
        },
        {
            step: 2,
            title: "Vehicle Details",
            description: "Vehicle type, registration, and insurance"
        },
        {
            step: 3,
            title: "Document Upload",
            description: "License, vehicle papers, and identity proof"
        },
        {
            step: 4,
            title: "Verification",
            description: "Background check and approval process"
        }
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            setActiveTab(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleRegistrationNext = () => {
        if (registrationStep < 4) {
            setRegistrationStep(registrationStep + 1);
        } else {
            setShowRegistrationModal(false);
            // Handle final submission
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                userType={"homepage"}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                scrollToSection={scrollToSection}
            />

            {/* Hero Section */}
            <section
                id="home"
                className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white pt-24 pb-20 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            India's Premier Delivery Network
                        </h1>
                        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of delivery partners earning up to ₹45,000 monthly.
                            Scale your business with India's most trusted logistics platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <button
                                onClick={() => setShowRegistrationModal(true)}
                                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
                            >
                                <span>Register as Partner</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => scrollToSection('services')}
                                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                            >
                                <span>Explore Services</span>
                                <Play className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Enhanced Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {serviceStats.map((stat, index) => (
                                <StatCard key={index} {...stat} delay={index * 200} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Delivery Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From last-mile delivery to long-distance logistics, we provide end-to-end
                            solutions for businesses of all sizes with cutting-edge technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} delay={index * 100} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Requirements Section */}
            <section id="partners" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Become a Delivery Partner
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Join our network of professional delivery partners and start earning with flexible schedules
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Requirements */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                                <CheckCircle className="h-6 w-6 mr-3 text-emerald-500" />
                                Partner Requirements
                            </h3>
                            <ul className="space-y-4">
                                {partnerRequirements.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                        <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Registration Steps */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                                <FileText className="h-6 w-6 mr-3 text-blue-500" />
                                Registration Process
                            </h3>
                            <div className="space-y-6">
                                {registrationSteps.map((step, idx) => (
                                    <div key={idx} className="flex items-start space-x-4">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Stats */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Network Performance
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real-time metrics showcasing our delivery network's efficiency and scale
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100">
                            <Globe className="mx-auto h-10 w-10 text-blue-500 mb-4" />
                            <p className="text-4xl font-bold text-gray-900">50+</p>
                            <p className="text-gray-600 mt-2 font-medium">Cities Covered</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100">
                            <Clock className="mx-auto h-10 w-10 text-green-500 mb-4" />
                            <p className="text-4xl font-bold text-gray-900">30 min</p>
                            <p className="text-gray-600 mt-2 font-medium">Avg Delivery Time</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100">
                            <TrendingUp className="mx-auto h-10 w-10 text-orange-500 mb-4" />
                            <p className="text-4xl font-bold text-gray-900">99.2%</p>
                            <p className="text-gray-600 mt-2 font-medium">Success Rate</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100">
                            <Settings className="mx-auto h-10 w-10 text-purple-500 mb-4" />
                            <p className="text-4xl font-bold text-gray-900">24/7</p>
                            <p className="text-gray-600 mt-2 font-medium">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold mb-6">Start Your Delivery Business Today</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Join India's fastest growing delivery network and unlock unlimited earning potential
                    </p>

                    <button
                        onClick={() => setShowRegistrationModal(true)}
                        className="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        Register Now - It's Free!
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                                    <Truck className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">QuickDeliver Pro</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                India's most trusted delivery and logistics platform
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">For Partners</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Register as Partner</li>
                                <li>Partner Support</li>
                                <li>Earnings Calculator</li>
                                <li>Partner App</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Same Day Delivery</li>
                                <li>Express Delivery</li>
                                <li>Bulk Logistics</li>
                                <li>API Integration</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+91-1800-XXX-XXXX</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>support@quickdeliver.in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 QuickDeliver Pro. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Registration Modal */}
            {showRegistrationModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Partner Registration
                            </h3>
                            <button
                                onClick={() => setShowRegistrationModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center">
                                {registrationSteps.map((step, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${registrationStep > step.step
                                                ? 'bg-green-500 text-white'
                                                : registrationStep === step.step
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            {registrationStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                                        </div>
                                        {idx < registrationSteps.length - 1 && (
                                            <div className={`w-8 h-1 mx-2 ${registrationStep > step.step ? 'bg-green-500' : 'bg-gray-200'
                                                }`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-2 text-center">
                                Step {registrationStep} of {registrationSteps.length}: {registrationSteps[registrationStep - 1].title}
                            </p>
                        </div>

                        {/* Form content would go here based on registrationStep */}
                        <div className="space-y-4">
                            {registrationStep === 1 && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </>
                            )}

                            {registrationStep === 2 && (
                                <>
                                    <select
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.vehicleType}
                                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                                    >
                                        <option value="bike">Bike/Scooter</option>
                                        <option value="car">Car</option>
                                        <option value="truck">Truck/Tempo</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </>
                            )}

                            {/* Add more steps as needed */}
                        </div>

                        <div className="flex justify-between mt-8">
                            {registrationStep > 1 && (
                                <button
                                    onClick={() => setRegistrationStep(registrationStep - 1)}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={handleRegistrationNext}
                                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                {registrationStep === 4 ? 'Complete Registration' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}