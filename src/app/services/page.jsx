import React from "react";
import { fakeServiceData } from "../../../public/serviceData";
import Link from "next/link";

const ServicesPage = () => {
  const serviceData = fakeServiceData;

  return (
    <div className="min-h-screen bg-[#3A3B40] px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white tracking-wide">
        Our Services
      </h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {serviceData?.map((service) => (
          <Link href={`services/${service.id}`} key={service.id}>
            <div className="bg-[#2E2F35] rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer border border-transparent hover:border-teal-400">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">
                {service.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
