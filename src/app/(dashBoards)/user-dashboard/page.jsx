import React from 'react';

const UserDashboardPage = () => {
  const userColor = '#77d57e'; // light green

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: userColor }}
        >
          Welcome to Your Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          Here's a quick overview of your account and activities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'Profile',
            desc: 'View and update your personal information.'
          }, {
            title: 'Orders',
            desc: 'Track your recent orders and activity history.'
          }, {
            title: 'Support',
            desc: 'Contact support or open a help ticket.'
          }].map((card, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition border-t-4"
              style={{ borderTopColor: userColor }}
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
