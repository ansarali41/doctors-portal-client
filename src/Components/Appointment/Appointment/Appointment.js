import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [date,setDate] = useState(new Date()); 
    const handleDateChange = (date) => {
        setDate(date)
        console.log(date);
    }

    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader date={date} handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={date}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;