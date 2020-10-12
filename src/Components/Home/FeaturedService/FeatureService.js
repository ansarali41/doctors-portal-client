import React from 'react';
import feature from'../../../images/feature.png'
const FeatureService = () => {
    return (
        <section>
            <div className="container mb-5 pb-0 pb-md-5 my-5">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={feature} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br/> care, on Your Terms </h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates mollitia eaque tempore odio sapiente quisquam earum culpa. Perspiciatis sit exercitationem cumque. Nulla reiciendis voluptatibus, repellat est, perferendis dolores ab voluptas vel ipsa praesentium neque possimus, esse delectus. Illo adipisci nobis, voluptate cumque, dicta unde est natus aperiam culpa quas possimus numquam ut quod ipsum ullam quae, voluptatum asperiores ab odit porro. Incidunt perspiciatis quos minus sequi. In ut illum maxime et aperiam eius laborum</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;