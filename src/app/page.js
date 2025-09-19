import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/images/banner.webp";

export default function Home() {
  return (
    <section className="bg-[#3A3B40] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Your <span className="text-teal-400">Business</span> with
            Modern Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            We provide innovative digital services and strategies to help your
            business grow and thrive in today’s competitive world.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 rounded-lg text-lg font-semibold shadow-md transition"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-gray-500 hover:border-teal-400 rounded-lg text-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="relative w-full h-80 lg:h-[450px]">
          <Image
            src={banner} 
            alt="Hero"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
