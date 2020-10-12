import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="pt-4">
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <h6 style={{ color: '#1CC7C1' }}>Services</h6>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </div>
                    <div className="col-md-3">

                        <ul>
                            <h6 style={{ color: '#1CC7C1' }}>Oral Health Care</h6>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </div>
                    <div className="col-md-3">

                        <ul>
                            <h6 style={{ color: '#1CC7C1' }}>Our Address</h6>
                            <li>NewYork-101010 Hudson</li>
                            <li>Yards</li>
                            <div className="my-5">
                                <FontAwesomeIcon size='2x' style={{ color: '#1CC7C1' , paddingRight:'5px'}} icon={faFacebook} />
                                <FontAwesomeIcon size='2x' style={{ color: '#1CC7C1' , paddingRight:'5px'}} icon={faGooglePlus} />
                                <FontAwesomeIcon size='2x' style={{ color: '#1CC7C1' , paddingRight:'5px'}} icon={faTwitter} />
                            </div>
                            <h6>Call Now</h6>
                            <h6 style={{ background: '#1CC7C1', padding: '10px', width: '125px' }}>+2026565235</h6>
                        </ul>


                    </div>
                </div>
                <p className="text-center"><small>Copyright {new Date().getFullYear()} All Rights Reserved</small></p>
            </div>
        </footer>
    );
};

export default Footer;