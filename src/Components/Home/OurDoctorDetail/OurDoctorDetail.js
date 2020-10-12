import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurDoctorDetail = ({doctor}) => {
    const {name, image, phone} = doctor;
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img className="img-fluid" src={image} alt="" />
                <h6>{name}</h6>
                <p><small><FontAwesomeIcon style={{color: '#1CC7C1' }} icon={faPhone} />{phone}</small></p>
            </div>
        </div>
    );
};

export default OurDoctorDetail;