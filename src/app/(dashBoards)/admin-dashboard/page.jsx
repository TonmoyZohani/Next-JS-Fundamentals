import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Users</h2>
            <p className="text-gray-500">Manage user accounts and permissions.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Reports</h2>
            <p className="text-gray-500">View detailed analytics and activity logs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Settings</h2>
            <p className="text-gray-500">Configure system-wide settings and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
