import React from 'react';
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonial.css'

const testimonialData = [
    { 
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur similique perferendis, reiciendis voluptatibus laborum atque nam ipsum fugiat provident.",
        name:"Wilson Harry",
        from: 'California',
        image: wilson
     },
    { 
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur similique perferendis, reiciendis voluptatibus laborum atque nam ipsum fugiat provident.",
        name:"Ema",
        from: 'California',
        image: ema
     },
    { 
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur similique perferendis, reiciendis voluptatibus laborum atque nam ipsum fugiat provident.",
        name:"Aliza Farari",
        from: 'California',
        image: aliza
     },
]

const Testimonials = () => {
    return (
        <section className="container my-5 testimonial-container">
            <div className="my-5">
                <h6 className="text-uppercase" style={{ color: '#1CC7C1' }}>Testimonial</h6>
                <h4>What's Our Patients <br/> Says</h4>
            </div>
            <div className="mt-5 mb-5">
                <div className="row">
                    {
                        testimonialData.map((testimonial,x) => <TestimonialDetail testimonial={testimonial} key={x}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;