import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../../assets/Images/home-banner.jpg';
const Landing = () => {
    return (
        <section className=''>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=''>
                        <h1 className=" text-2xl md:text-5xl text-primary font-bold">We Provide the Best Product Worldwide!</h1>
                        <p className="py-3 md:my-6 font-semibold">Championing technology's role in preparing and empowering the UK for what comes next, delivering a better future for people, society</p>
                        <Link to='/dashboard' className='btn btn-primary'>Explore more</Link>
                    </div>
                    <div className=''>
                        <img src={landing} alt='' className=" w-full rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Landing;