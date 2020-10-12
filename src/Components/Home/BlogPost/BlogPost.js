import React from 'react';

const BlogPost = ({blog}) => {
    const { title,description, author, authorImg,date} = blog
    return (
        <div className="col-md-4 my-5">
            <div className="shadow p-3 mb-5 bg-white rounded">
                <div className="d-flex">
                    <div>
                        <img src={authorImg} alt="" />
                    </div>
                    <div className="align-self-center p-3">
                        <h6>{author}</h6>
                        <p><small>{date}</small></p>
                    </div>
                </div>
                <h5>{title}</h5>
                <p><small>{description}</small></p>
            </div>
        </div>
    );
};

export default BlogPost;