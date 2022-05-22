import React from 'react';
import ExpertTeam from './ExpertTeam';
import Landing from './Landing';
import Products from './Products';
import WeProvide from './WeProvide';

const Home = () => {
    return (
        <main className='container mx-auto'>
            <Landing />
            <WeProvide></WeProvide>
            <Products />
            <ExpertTeam />
        </main>
    );
};

export default Home;