import React from "react";
import { Outlet } from "react-router-dom";
import Worker_sidebar from "../Components/Dashboard_layout/Worker_sidebar";


const Worker_dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Worker_sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet /> {/* Shows the selected worker page */}
      </div>
    </div>
  );
};

export default Worker_dashboard;
