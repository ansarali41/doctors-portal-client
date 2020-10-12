import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 mt-5 text-white pl-5">
                        <h6 style={{ color: '#1CC7C1' }}>APPOINTMENT</h6>
                        <h2 className="my-4">Make an appointment <br /> Today</h2>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod aspernatur explicabo, veritatis et optio!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;