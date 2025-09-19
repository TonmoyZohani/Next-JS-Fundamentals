import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3A3B40] text-white px-6">
      <h1 className="text-8xl font-extrabold mb-6 text-teal-400 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved. Let’s
        get you back to a safe place.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-teal-500 hover:bg-teal-400 rounded-lg text-lg font-semibold shadow-md transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
