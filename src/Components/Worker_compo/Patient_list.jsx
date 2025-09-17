import React from 'react';
import { dashboardData } from '../utils/dashboardUtils'; // Adjust path if needed

const Patient_list = () => {
    // Access the specific data for the 'patient_list' page
    const { title, subtitle } = dashboardData.patient_list;

    return (
        <div>
            {/* Welcome Section */}
            <div className="h-[30vh] bg-gray-100 flex flex-col justify-center items-center text-center p-5">
                <h2 className="text-gray-700 text-2xl font-semibold">
                    {title}
                </h2>
                <p className="text-gray-500 mt-2">
                    {subtitle}
                </p>
            </div>

            {/* Main Content */}
            <div className="p-5">
                {/* Your other analytics components and charts will go here */}
            </div>
        </div>
    );
};

export default Patient_list;
