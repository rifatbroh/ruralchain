// Appointment.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'; // Icon for online appointment

// Corrected image import for common React setups (e.g., Create React App, Vite)
import stethoscopeImg from '../../assets/Web_Photo_Editor (4).jpg'; 

const Appointment = () => {
  return (
    <section className="py-16 bg-[#edf7fc] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">FEATURES</p>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-2">Our Speciality</h2>
        </div>

        {/* Appointment Card */}
        <div className="relative bg-[#0c96c5] rounded-3xl p-8 md:p-12 mx-auto max-w-4xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
          {/* Decorative Background Element (subtle circles/waves) */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              <circle cx="20" cy="20" r="15" fill="url(#grad1)" />
              <circle cx="80" cy="80" r="20" fill="url(#grad1)" />
              <circle cx="50" cy="50" r="10" fill="url(#grad1)" />
            </svg>
          </div>

          {/* Left Content: Text and Icon */}
          <div className="relative z-10 text-white text-center md:text-left md:w-1/2">
            <div className="bg-white p-4 rounded-xl inline-flex mb-4">
              <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="text-[#0c96c5]" />
            </div>
            <h3 className="text-3xl font-bold mb-3">Online Appointment</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-sm mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className="bg-white text-[#0c96c5] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md">
              Learn More
            </button>
          </div>

          {/* Right Content: Stethoscope Illustration */}
          <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={stethoscopeImg} // Using the correctly imported image
              alt="Hand holding stethoscope"
              // Use object-contain to ensure the full image is visible without cropping
              // and h-auto to maintain aspect ratio, max-w-full for responsiveness.
              className="w-70 h-auto object-contain rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;