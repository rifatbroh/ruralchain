import React from 'react';
import { dashboardData } from '../utils/dashboardUtils'; // Adjust path if needed

const Health_record = () => {
    // Access the specific data for the 'health_record' page
    const { title, subtitle } = dashboardData.health_record;

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

export default Health_record;
