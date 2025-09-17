import React from "react";
import { Outlet } from "react-router-dom";
import Doctor_sidebar from "../Components/Dashboard_layout/Doctor_sidebar";

const DoctorDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Doctor_sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet /> {/* This renders the selected component */}
      </div>
    </div>
  );
};

export default DoctorDashboard;
