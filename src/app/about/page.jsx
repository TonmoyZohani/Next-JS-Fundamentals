"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push(`/about/address`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl">About Page</p>
      <Link href="/about/address">Address Page</Link>

      <button type="button" onClick={handleNavigation}>Address Page By Button</button>
    </div>
  );
};

export default AboutPage;
