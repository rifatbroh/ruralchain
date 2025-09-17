import React from "react";
import { NavLink } from "react-router-dom";

const Patient_sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-5">
      <h2 className="text-2xl font-bold mb-10">Patient Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="health-records"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Health Records
        </NavLink>
        <NavLink
          to="ai-insight"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          AI Insights
        </NavLink>
        <NavLink
          to="exports-reports"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Export Reports
        </NavLink>
      </nav>
    </div>
  );
};

export default Patient_sidebar;
