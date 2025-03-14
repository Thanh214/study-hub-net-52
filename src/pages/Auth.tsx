
import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
