import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../../images/chair.png'

const AppointmentHeader = ({handleDateChange,date}) => {

    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center w-100">
            <div className="col-md-4 offset-md-1 text-center mr-5">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                <Calendar onChange={handleDateChange} value={date}/>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;