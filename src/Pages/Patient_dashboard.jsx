import React from "react";
import { Outlet } from "react-router-dom";
import Patient_sidebar from "../Components/Dashboard_layout/Patient_sidebar";

const Patient_dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Patient_sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet /> {/* Shows the selected patient page */}
      </div>
    </div>
  );
};

export default Patient_dashboard;
