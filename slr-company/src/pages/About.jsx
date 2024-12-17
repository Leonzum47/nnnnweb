import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <section style={{ padding: '2rem' }}>
                <h1>About Us</h1>
                <p>
                    Learn more about our company, our values, and our mission to deliver the best services
                    to our customers.
                </p>
            </section>
        </div>
    );
};

export default About;