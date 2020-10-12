import React from 'react';
import doctorSm from '../../../images/doctor-sm.png'
import OurDoctorDetail from '../OurDoctorDetail/OurDoctorDetail';
const doctorData = [
    {
        name: 'Dr. mashoor gulati',
        image: doctorSm,
        phone: '+71-5959-556'

    },
    {
        name: 'Dr. mashoor gulati',
        image: doctorSm,
        phone: '+71-5959-556'

    },
    {
        name: 'Dr. mashoor gulati',
        image: doctorSm,
        phone: '+71-5959-556'

    },
]

const OurDoctor = () => {
    return (
        <section className="container mb-5">
            <div className="text-center mb-5">
                <h5 style={{ color: '#1CC7C1' }}>Our Doctors</h5>
            </div>
            <div className="row">
                {
                    doctorData.map((doctor,x) => <OurDoctorDetail doctor={doctor} key={x}></OurDoctorDetail>)
                }
            </div>
        </section>
    );
};

export default OurDoctor;