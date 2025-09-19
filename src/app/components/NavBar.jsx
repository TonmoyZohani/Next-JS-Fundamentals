"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {!isDashboard && (
        <header className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-md">
          <nav className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo / Brand */}
              <Link href="/" className="text-white font-bold text-xl tracking-wide">
                MyBrand
              </Link>

              {/* Nav Links */}
              <ul className="flex space-x-6">
                {links.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`relative px-2 py-1 text-lg font-medium transition-colors ${
                          isActive
                            ? "text-yellow-300"
                            : "text-white hover:text-yellow-300"
                        }`}
                      >
                        {label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 rounded"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default NavBar;
