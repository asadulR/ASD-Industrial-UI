import React from 'react';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import BusinessSummary from './BusinessSummary';
import ExpertTeam from './ExpertTeam';
import Landing from './Landing';
import Products from './Products';
import Review from './Review';
import WeProvide from './WeProvide';

const Home = () => {

    return (
        <main className='container mx-auto'>
            <PageTitle title="Home"></PageTitle>

            <Landing />
            <WeProvide></WeProvide>
            <Products />
            <ExpertTeam />
            <Review />
            <BusinessSummary />
            <Footer />
        </main>
    );
};

export default Home;