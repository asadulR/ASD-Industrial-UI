import React from 'react';
import Landing from './Landing';
import WeProvide from './WeProvide';

const Home = () => {
    return (
        <main className='container mx-auto px-3'>
            <Landing/>
            <WeProvide></WeProvide>
        </main>
    );
};

export default Home;