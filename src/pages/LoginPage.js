import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { ReactComponent as Logo } from '../assets/logo.svg';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo className="mx-auto h-12 w-auto text-indigo-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Use: <span className="font-mono">employee@test.com</span> or <span className="font-mono">manager@test.com</span> (pw: 123)
          </p>
        </div>
        <div className="bg-white p-8 shadow-sm rounded-lg">
           <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;