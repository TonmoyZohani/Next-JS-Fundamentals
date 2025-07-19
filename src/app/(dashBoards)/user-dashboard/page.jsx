import React from 'react';

const UserDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          Here's a quick overview of your account and activities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile</h2>
            <p className="text-gray-500">View and update your personal information.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Orders</h2>
            <p className="text-gray-500">Track your recent orders and activity history.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Support</h2>
            <p className="text-gray-500">Contact support or open a help ticket.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
