import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const { subject, visitingHour, totalSpace } = booking;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 my-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
                <h4 className="brand-text">{subject}</h4>
                <h6>{visitingHour}</h6>
                <p className="text-uppercase"><small>{totalSpace} spaces available</small></p>
                <button onClick={openModal} className="btn btn-brand">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={subject} date={date}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;