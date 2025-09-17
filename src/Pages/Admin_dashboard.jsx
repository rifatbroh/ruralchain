import React from "react";
import { Outlet } from "react-router-dom";
import Admin_sidebar from "../Components/Dashboard_layout/Admin_sidebar";

const Admin_dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Admin_sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet /> {/* Shows the selected admin page */}
      </div>
    </div>
  );
};

export default Admin_dashboard;
