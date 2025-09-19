import React from "react";
import { fakeServiceData } from "../../../../public/serviceData";

const ServiceDetailsPage = ({ params }) => {
  console.log("Params", params.id);

  const id = Number(params.id);
  const serviceData = fakeServiceData;

  const singleService = serviceData?.find((service) => service.id === id);

  if (!singleService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-500 font-semibold">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Service Details
        </h1>

        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">ID:</p>
          <p className="text-gray-600">{singleService.id}</p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Name:</p>
          <p className="text-gray-600">{singleService.name}</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-700">Description:</p>
          <p className="text-gray-600">{singleService.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
