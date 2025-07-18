import React from "react";

const ServiceDetailsPage = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <h1>Service Details Page</h1>
      <p>Id: {id}</p>
    </div>
  );
};

export default ServiceDetailsPage;
