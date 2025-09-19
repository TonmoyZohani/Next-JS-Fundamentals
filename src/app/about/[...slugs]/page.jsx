import React from "react";

const AboutSlugsPages = async ({ params }) => {
  // Example: simulate fetching page data based on slugs
  const slugs = params.slugs || [];

  const pageData = await params;

  console.log("Params", pageData);

  return (
    <div className="p-6 text-white bg-[#24252A] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dynamic About Page</h1>
      <p>
        Slugs:{" "}
        <span className="text-teal-400">{slugs.join(" / ") || "None"}</span>
      </p>
    </div>
  );
};

export default AboutSlugsPages;
