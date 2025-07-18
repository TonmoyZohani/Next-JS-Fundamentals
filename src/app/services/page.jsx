import React from "react";
import { fakeServiceData } from "../../../public/serviceData";

const ServicesPage = () => {
  const serviceData = fakeServiceData;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <p className="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</p>

      <div className="grid grid-cols-1 gap-6">
        {serviceData?.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
