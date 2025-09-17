import React from "react";
import { NavLink } from "react-router-dom";

const Admin_sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-5">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="analytics"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          Analytics
        </NavLink>
        <NavLink
          to="user-management"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "p-2 hover:bg-gray-800 rounded"
          }
        >
          User Management
        </NavLink>
      </nav>
    </div>
  );
};

export default Admin_sidebar;
