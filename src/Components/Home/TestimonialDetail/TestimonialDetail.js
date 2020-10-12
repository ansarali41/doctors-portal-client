import React from 'react';

const TestimonialDetail = ({testimonial}) => {
    return (
        <section className="col-md-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
                <p>{testimonial.quote}</p>
                <div className="d-flex">
                    <div>
                        <img className="img-fluid" src={testimonial.image} alt="" />
                    </div>
                    <div className="align-self-center p-3">
                        <h6 style={{ color: '#1CC7C1' }}>{testimonial.name}</h6>
                        <p><small>{testimonial.from}</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialDetail;