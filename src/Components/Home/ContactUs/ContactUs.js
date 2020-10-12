import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className="text-center pt-5 contact-us-container">
            <div className="container">
                <div>
                    <h6 style={{ color: '#1CC7C1' }} className="text-uppercase">Contact Us</h6>
                    <h4 className="text-white">Always Connect with us</h4>
                </div>
                <div className="m-5 pb-5 pl-5">
                    <form action="">
                        <input type="text" className="form-control" placeholder="Email Address*" /> <br />
                        <input type="text" className="form-control" placeholder="Subject*" /> <br />
                        <textarea className="form-control" name="" id="" cols="30" rows="7" placeholder="Your Message*"></textarea> <br />
                        <button className="btn btn-primary w-25">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;