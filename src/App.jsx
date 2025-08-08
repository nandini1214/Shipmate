
import './App.css'
import DeliveryAdminDashboard from './components/Admin/DeliveryAdminDashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RoleBasedAuth from './components/auth/RoleBasedAuth';

import ServiceProviderHomepage from './components/Agent/AgentMain';
import Home from './components/Home/HomePage';
import AgentMain from './components/Agent/AgentMain';
import CustomerHomePage from './components/Customer/CustomerHomePage';
import Header from './components/common/Header';
import StoreManagementApp from './components/Buisness/StoreMain';
import { Toaster } from "react-hot-toast";
import SignupForm from './components/auth/authForm/SignupForm';
import LoginForm from './components/auth/authForm/LoginForm';
import AppDownloadPage from './pages/AppDownloadPage';
import DriverLoginForm from './components/auth/authForm/LoginForm';
function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver-login" element={<DriverLoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/admin' element={<DeliveryAdminDashboard />} />
          <Route path='/download' element={<AppDownloadPage />} />

          {/* <Route path="/driver/:id" element={<AgentMain />} />
          <Route path="/customer/:id" element={<CustomerHomePage />} /> */}
          <Route path="/header" element={<Header />} />
          {/* <Route path="/store/:id" element={<StoreManagementApp />} /> */}
        </Routes>

      </Router>
      <Toaster position="top-right" />
    </>
  )
}


export default App
