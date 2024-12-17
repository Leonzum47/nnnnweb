import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <header style={{ textAlign: 'center', margin: '2rem 0' }}>
                <h1>Welcome to the Home Page</h1>
                <p>This is the starting point of our application.</p>
            </header>
        </div>
    );
};

export default Home;