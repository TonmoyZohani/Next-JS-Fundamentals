'use client';
import React from "react";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  const isAdmin = pathname.includes("admin-dashboard");
  const panelTitle = isAdmin ? "Admin Panel" : "User Panel";
  const panelColor = isAdmin ? "#54b2c1" : "#77d57e"; 

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className="w-64 text-white shadow-md p-6 hidden md:block"
        style={{ backgroundColor: panelColor }}
      >
        <h2 className="text-2xl font-bold mb-6">{panelTitle}</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-yellow-200">
            Dashboard
          </a>
          <a href="#" className="block hover:text-yellow-200">
            My Profile
          </a>
          <a href="#" className="block hover:text-yellow-200">
            Settings
          </a>
          <a href="#" className="block hover:text-yellow-200">
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
