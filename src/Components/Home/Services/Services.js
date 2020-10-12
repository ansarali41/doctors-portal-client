import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';
const serviceData = [
    {
        name: 'fluoride treatment',
        image: fluoride,
    },
    {
        name: 'Cavity filling',
        image: cavity,
    },
    {
        name: 'teeth whitening',
        image: whitening,
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h5 className="mt-5" style={{ color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map((service,x) => <ServicesDetail service={service} key={x}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;