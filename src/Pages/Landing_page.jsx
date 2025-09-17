import React from 'react';
import Navbar from '../Components/Landing_compo/Navbar';
import Hero from '../Components/Landing_compo/Hero';
import Detail from '../Components/Landing_compo/Detail';
import Service from '../Components/Landing_compo/Service';
import Appointment from '../Components/Landing_compo/Appoinment';

const Landing_page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Detail />
            <Service />
            <Appointment />
        </div>
    );
};

export default Landing_page;