import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-blue-600 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <Link href="/" className="text-white hover:text-yellow-300 text-lg font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-yellow-300 text-lg font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-yellow-300 text-lg font-medium">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
