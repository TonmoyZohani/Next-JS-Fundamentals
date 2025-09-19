import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#24252A] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">MyBrand</h2>
          <p className="text-gray-300">
            Creating modern and efficient web solutions for your business.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-teal-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-teal-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-teal-400 transition"><FaInstagram /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
