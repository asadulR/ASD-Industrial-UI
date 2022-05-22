import React from 'react';
import Landing from './Landing';
import Products from './Products';
import WeProvide from './WeProvide';

const Home = () => {
    return (
        <main className='container mx-auto'>
            <Landing />
            <WeProvide></WeProvide>
            <Products />
        </main>
    );
};

export default Home;