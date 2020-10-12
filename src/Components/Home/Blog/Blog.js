import React from 'react';
import wilson from '../../../images/wilson.png'
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: 'check at least a doctor i a year for your teeth',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error nesciunt maxime cum quas ea.",
        author: 'Dr. Caudi',
        authorImg: wilson,
        date: '23 april 2019'

    },
    {
        title: 'check at least a doctor i a year for your teeth',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error nesciunt maxime cum quas ea.",
        author: 'Dr. john mitchel',
        authorImg: wilson,
        date: '23 april 2019'

    },
    {
        title: 'check at least a doctor i a year for your teeth',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error nesciunt maxime cum quas ea.",
        author: 'Dr. chuidi',
        authorImg: wilson,
        date: '23 april 2019'
    },
]

const Blog = () => {
    return (
        <section className="container">
            <div className="text-center mb-5">
                <h6 style={{ color: '#1CC7C1' }}>OUR BLOG</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row">
                {
                    blogData.map((blog,x) => <BlogPost blog={blog} key={x}></BlogPost>)
                }
            </div>
        </section>
    );
};

export default Blog;