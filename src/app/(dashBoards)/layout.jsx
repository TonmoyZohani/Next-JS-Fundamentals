import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Panel</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            My Profile
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Settings
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
