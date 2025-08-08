import React, { useEffect, useState } from "react";

import DashboardPage from "./Pages/DashboardPage";
import OrdersPage from "./Pages/OrdersPage";
import DriversPage from "./Pages/DriversPage";
import ComingSoonPage from "./Pages/ComingSoonPage";
import PartnerPage from "./Pages/PartnerPage";
import Sidebar from "./layoutComponents/Sidebar";
import Header from "../common/Header";
import { useDispatch, useSelector } from "react-redux";


import CustomerPage from "./Pages/CustomerPage";
import { getUsers } from "../../redux/Slices/auth/authSlice";
import VehiclePage from "./Pages/VehiclePage";

function DeliveryAdminDashboard() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("dashboard");
  const stats = {
    totalOrders: 1247,
    activeDrivers: 89,
    totalRevenue: 45230,
    avgDeliveryTime: 28,
  };

  const recentOrders = [
    {
      id: "#12847",
      customer: "John Doe",
      restaurant: "Pizza Palace",
      driver: "Mike Johnson",
      status: "delivered",
      amount: 24.5,
      time: "2 min ago",
    },
    {
      id: "#12846",
      customer: "Sarah Smith",
      restaurant: "Burger King",
      driver: "Emma Davis",
      status: "in-transit",
      amount: 18.75,
      time: "5 min ago",
    },
    {
      id: "#12845",
      customer: "Robert Wilson",
      restaurant: "Sushi Express",
      driver: "David Lee",
      status: "preparing",
      amount: 32.0,
      time: "8 min ago",
    },
    {
      id: "#12844",
      customer: "Lisa Brown",
      restaurant: "Taco Bell",
      driver: "Anna White",
      status: "delivered",
      amount: 15.25,
      time: "12 min ago",
    },
  ];

  // const drivers = [
  //   {
  //     id: 1,
  //     name: "Mike Johnson",
  //     status: "active",
  //     orders: 15,
  //     rating: 4.8,
  //     phone: "+1 234-567-8901",
  //   },
  //   {
  //     id: 2,
  //     name: "Emma Davis",
  //     status: "active",
  //     orders: 12,
  //     rating: 4.9,
  //     phone: "+1 234-567-8902",
  //   },
  //   {
  //     id: 3,
  //     name: "David Lee",
  //     status: "offline",
  //     orders: 8,
  //     rating: 4.7,
  //     phone: "+1 234-567-8903",
  //   },
  //   {
  //     id: 4,
  //     name: "Anna White",
  //     status: "active",
  //     orders: 20,
  //     rating: 4.6,
  //     phone: "+1 234-567-8904",
  //   },
  // ];

  const partners = [
    {
      id: 1,
      name: "Pizza Palace",
      status: "active",
      orders: 45,
      rating: 4.5,
      commission: "15%",
    },
    {
      id: 2,
      name: "Burger King",
      status: "active",
      orders: 38,
      rating: 4.2,
      commission: "18%",
    },
    {
      id: 3,
      name: "Sushi Express",
      status: "pending",
      orders: 22,
      rating: 4.7,
      commission: "20%",
    },
    {
      id: 4,
      name: "Taco Bell",
      status: "active",
      orders: 56,
      rating: 4.1,
      commission: "16%",
    },
  ];

  useEffect(() => {
    if (
      activeTab === "driver" ||
      activeTab === "store" ||
      activeTab === "customer"
    ) {
      dispatch(getUsers({ user_type: activeTab }));
    }
  }, [dispatch, activeTab]);
  console.log(users)
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage stats={stats} recentOrders={recentOrders} />;
      case "order":
        return <OrdersPage orders={recentOrders} />;
      case "driver":
        return <DriversPage drivers={users} />;
      case "store":
        return <PartnerPage partners={users} />;
      case "customer":
        return <CustomerPage customers={users} />;
    case "vehicle":
        return <VehiclePage drivers={users} />;
      case "analytic":
        return <ComingSoonPage title="Analytics" />;
      default:
        return <DashboardPage stats={stats} recentOrders={recentOrders} />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="pl-64">
        <Header activeTab={activeTab} userType={"admin"} />

        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default DeliveryAdminDashboard;
