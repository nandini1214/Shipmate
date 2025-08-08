import React, { useEffect, useState } from "react";
import {
  Smartphone,
  Download,
  CheckCircle,
  Star,
  Shield,
  Zap,
  MapPin,
  Clock,
  DollarSign,
  Users,
  PlayCircle,
  ArrowRight,
  QrCode,
  Apple,
  Phone,
  Mail,
  ExternalLink,
  Award,
  TrendingUp,
  Truck,
  Package,
  Navigation,
  User,
  LogOut,
  Bell,
  Settings,
  HelpCircle,
  X,
  DownloadCloud,
  UserCheck,
  Play,
  DollarSignIcon,
} from "lucide-react";
import Header from "../components/common/Header";
import FeatureCard from "../components/Home/card/FeatureCard";

import { motion } from "framer-motion";
import DownloadButton from "../components/common/DownloadButton";
// Header Component for Registered Partner
const PartnerHeader = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                QuickDeliver Pro
              </h1>
              <p className="text-xs text-gray-600">Partner Portal</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.first_name} {user?.last_name}
                </p>
                <p className="text-xs text-gray-600">Partner ID: #{user?.id}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// App Feature Card
const AppFeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div
        className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Download Button Component

export default function AppDownloadPage() {
  const [showQR, setShowQR] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Mock user data - in real app this would come from authentication
  const user = {
    id: "DP001",
    first_name: "Rajesh",
    last_name: "Kumar",
    phone: "+91-98765-43210",
    email: "rajesh.kumar@example.com",
    city: "Mumbai",
  };

  const handleLogout = () => {
    // Add logout logic here
    setShowWelcome(false);
  };

  const appFeatures = [
    {
      icon: MapPin,
      title: "Real-time Navigation",
      description:
        "Get turn-by-turn directions with live traffic updates and optimal route suggestions.",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Instant Earnings",
      description:
        "Track your earnings in real-time and get paid instantly after each delivery completion.",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Receive delivery requests, updates, and important alerts directly on your phone.",
      color: "bg-gradient-to-r from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Safety Features",
      description:
        "Emergency SOS, trip sharing, and 24/7 support for your safety and security.",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Detailed insights into your performance, earnings history, and improvement tips.",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Rewards & Bonuses",
      description:
        "Earn bonus rewards, participate in challenges, and unlock achievement badges.",
      color: "bg-gradient-to-r from-teal-500 to-lime-500",
    },
  ];

  const benefits = [
    "Work anytime, anywhere with complete flexibility",
    "Earn up to ₹45,000 per month with surge pricing",
    "Zero commission fees on your earnings",
    "Comprehensive insurance coverage included",
    "24/7 customer and partner support",
    "Weekly performance bonuses and incentives",
  ];
  const steps = [
    {
      id: 1,
      title: "Download App",
      desc: "Install the QuickDeliver Partner app",
      icon: DownloadCloud,
    },
    {
      id: 2,
      title: "Login",
      desc: "Use your registered credentials",
      icon: UserCheck,
    },
    {
      id: 3,
      title: "Go Online",
      desc: "Toggle online to start receiving requests",
      icon: PlayCircle,
    },
    {
      id: 4,
      title: "Start Earning",
      desc: "Accept deliveries and earn money",
      icon: DollarSignIcon,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType={"delivery"} user={user} />

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showWelcome ? (
          <>
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl mb-8 shadow-xl">
                <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">
                  🎉 Registration Complete!
                </h1>
                <p className="text-green-100 text-lg">
                  Welcome {user.first_name}! You're now part of the QuickDeliver
                  Pro family
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center mb-6">
                  <Smartphone className="h-20 w-20 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Download the Partner App
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  To start accepting deliveries and earning money, please
                  download our mobile app. All delivery operations are managed
                  through the mobile application.
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <DownloadButton
                platform="Android"
                icon={Smartphone}
                bgColor="bg-gradient-to-r from-green-600 to-green-700"
                hoverColor="hover:from-green-700 hover:to-green-800"
              />

              <DownloadButton
                platform="iOS"
                icon={Apple}
                bgColor="bg-gradient-to-r from-gray-800 to-black"
                hoverColor="hover:from-gray-900 hover:to-gray-800"
                comingSoon={true}
              />
            </div>

            {/* QR Code Section */}
            <div className="text-center mb-16">
              <button
                onClick={() => setShowQR(!showQR)}
                className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <QrCode className="h-5 w-5" />
                <span>Scan QR Code to Download</span>
              </button>

              {showQR && (
                <div className="mt-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200 inline-block">
                  <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCode className="h-24 w-24 text-gray-400" />
                    <div className="absolute text-xs text-gray-500 mt-32">
                      QR Code Here
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Scan with your phone camera
                  </p>
                </div>
              )}
            </div>

            {/* App Features Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Powerful App Features
              </h3>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Our mobile app is packed with features designed to help you
                maximize your earnings and provide the best delivery experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Partner Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Getting Started Steps */}
            {/* <div className="mb-16">
                            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                                Getting Started is Easy
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: 1, title: "Download App", description: "Install the QuickDeliver Partner app", icon: Download },
                                    { step: 2, title: "Login", description: "Use your registered credentials", icon: User },
                                    { step: 3, title: "Go Online", description: "Toggle online to start receiving requests", icon: Zap },
                                    { step: 4, title: "Start Earning", description: "Accept deliveries and earn money", icon: DollarSign }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start space-x-4">
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
                        </div> */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
                  Getting Started is Easy
                </h3>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((step) => (
                    <motion.div
                      key={step.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform"
                    >
                      <div className="flex items-center justify-center mb-4">
                        {/* <div className="text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">
                                                    {step.id}
                                                </div> */}
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            {/* Support Section */}
            <div className="bg-white-800 rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
              <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to help you with app
                download, login issues, or any questions about getting started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+91-1800-XXX-XXXX"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Support</span>
                </a>

                <a
                  href="mailto:support@quickdeliver.in"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Support</span>
                </a>

                <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                  <span>Help Center</span>
                </button>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start Earning?
                </h3>
                <p className="text-blue-100 text-lg mb-8">
                  Download the app now and start your delivery partner journey
                  today!
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Download className="h-6 w-6 inline-block mr-2" />
                  Download Partner App
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Logged Out State */
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 max-w-md mx-auto">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Logged Out Successfully
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for using QuickDeliver ! Come back anytime!
              </p>
              <button
                onClick={() => setShowWelcome(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
