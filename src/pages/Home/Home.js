import React from 'react';
import Footer from '../../components/Footer';
import ExpertTeam from './ExpertTeam';
import Landing from './Landing';
import Products from './Products';
import Review from './Review';
import WeProvide from './WeProvide';

const Home = () => {

    return (
        <main className='container mx-auto'>
            <Landing />
            <WeProvide></WeProvide>
            <Products />
            <ExpertTeam />
            <Review />
            <Footer />
        </main>
    );
};

export default Home;