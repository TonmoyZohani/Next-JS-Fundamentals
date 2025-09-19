"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");

  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  if (isDashboard) return null;

  return (
    <>
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-[#24252A] border-b border-gray-700">
        <nav className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Left-aligned Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                LOGOBAKERY
              </Link>
            </div>

            {/* Center-aligned Navigation Links */}
            <div className="flex items-center justify-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right-aligned Contact Button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="bg-white text-[#24252A] px-6 py-3 rounded-md text-[15px] font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default NavBar;