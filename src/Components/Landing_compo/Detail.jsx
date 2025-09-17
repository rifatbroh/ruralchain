// Detail.jsx
import React from "react";

const details = [
  {
    title: "Opening Hours",
    info: "Mon - Fri: 9:00 AM - 6:00 PM",
    extra: "Contact: 123-456-7890",
    color: "bg-blue-500 text-white",
    button: "Check",
  },
  {
    title: "Appointment",
    info: "Schedule your visit",
    color: "bg-white text-black",
    button: "Request",
  },
  {
    title: "Final Doctors",
    info: "Available now",
    color: "bg-white text-black",
    button: "Check",
  },
  {
    title: "Final Locations",
    info: "Find nearest",
    color: "bg-white text-black",
    button: "Locate",
  },
];

const Detail = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 bg-[#edf7fc] py-20">
      {details.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg w-64 flex flex-col justify-between ${item.color}`}
        >
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="mb-4">{item.info}</p>
          {item.extra && <p className="mb-4">{item.extra}</p>}
          <button className="mt-auto bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
            {item.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Detail;
