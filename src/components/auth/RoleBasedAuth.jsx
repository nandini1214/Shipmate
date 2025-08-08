import React, { useState } from 'react';
import LoginForm from './authForm/LoginForm';
import SignupForm from './authForm/SignupForm';
import ForgotPasswordForm from './authForm/ForgetPasswordForm';



export default function RoleBasedAuth() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8">
        {currentView === 'login' && (
          <LoginForm
            onSwitchToSignup={() => setCurrentView('signup')}
            onForgotPassword={() => setCurrentView('forgot')}
          />
        )}

        {currentView === 'signup' && (
          <SignupForm
            onSwitchToLogin={() => setCurrentView('login')}
            onBack={() => setCurrentView('login')}
          />
        )}

        {currentView === 'forgot' && (
          <ForgotPasswordForm
            onBack={() => setCurrentView('login')}
          />
        )}
      </div>
    </div>
  );
}
