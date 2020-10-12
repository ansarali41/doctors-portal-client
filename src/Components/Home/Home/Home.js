import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import FeatureService from '../FeaturedService/FeatureService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;