import React from "react";
import { NavLink } from "react-router-dom";

const Worker_sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-5">
      <h2 className="text-2xl font-bold mb-10">Worker Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="register"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Register Patient
        </NavLink>
        <NavLink
          to="update-patient"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Add / Update Patient
        </NavLink>
        <NavLink
          to="patient-list"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Patient List
        </NavLink>
        <NavLink
          to="sync"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Sync Patients
        </NavLink>
      </nav>
    </div>
  );
};

export default Worker_sidebar;
