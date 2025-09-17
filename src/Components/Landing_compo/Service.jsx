// Service.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTooth,
  faHeartbeat,
  faMedkit,
  faXRay,
  faHospital,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faHeartbeat, label: 'GP Care', bg: 'bg-blue-500', color: 'text-white', pos: 'top-10 left-[10%] -translate-x-1/2' },
  { icon: faMedkit, label: 'Medicare', bg: 'bg-white', color: 'text-blue-600', pos: 'top-1/3 left-0 -translate-x-1/2' },
  { icon: faHospital, label: 'Hospitals', bg: 'bg-blue-500', color: 'text-white', pos: 'bottom-20 left-[10%] -translate-x-1/2' },
  { icon: faXRay, label: 'Checkup', bg: 'bg-white', color: 'text-blue-600', pos: 'top-1/3 right-0 translate-x-1/2' },
  { icon: faTooth, label: 'Dental', bg: 'bg-blue-500', color: 'text-white', pos: 'top-10 right-[10%] translate-x-1/2' },
];

const rightSideServices = [
  { icon: faTooth, label: 'Dental Care', desc: 'Our team of experienced dentists provides comprehensive oral care from routine checkups to advanced procedures.' },
  { icon: faHeartbeat, label: 'Heart Health', desc: 'We offer advanced cardiac screenings and personalized plans to keep your heart in excellent condition.' },
  { icon: faXRay, label: 'Radiology', desc: 'State-of-the-art diagnostic imaging services for accurate and timely health assessments.' },
];

const Service = () => {
  return (
    <section className="py-16 bg-[#edf7fc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center pb-20">
          <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">Service</p>
          <h2 className="text-5xl font-extrabold text-gray-800 mt-2">Our Medical Services</h2>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Section: Doctor Image + Service Icons */}
          <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-[400px]">
            {/* Doctor Image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <img
                src="https://i.pinimg.com/1200x/da/80/96/da809614d2a8b51cae495f77642182b2.jpg"
                alt="Doctor"
                className="w-full h-full object-cover rounded-full shadow-xl"
              />
            </div>

            {/* Service Bubbles Around the Image */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`
                  absolute ${service.pos}
                  ${service.bg} ${service.color}
                  p-4 rounded-full shadow-lg
                  flex items-center space-x-2
                  text-sm font-medium
                  transition-all duration-300
                  transform hover:scale-110 cursor-pointer
                `}
              >
                <FontAwesomeIcon icon={service.icon} size="lg" />
                <span>{service.label}</span>
              </div>
            ))}
          </div>

          {/* Right Section: Redesigned Service List */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Care</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg lg:mx-0 mx-auto">
              Our clinic offers a wide range of specialized services tailored to your unique health needs, delivered by a team of dedicated professionals.
            </p>

            <div className="flex flex-col space-y-4">
              {rightSideServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4 cursor-pointer"
                >
                  <div className="bg-blue-500 text-white p-4 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={item.icon} size="xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{item.label}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;