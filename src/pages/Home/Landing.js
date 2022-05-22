import React from 'react';
import landing from '../../assets/Images/home-banner.jpg';
const Landing = () => {
    return (
        <section className='mt-6 md:mt-0'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className=''>
                        <h1 class=" text-2xl md:text-5xl text-primary font-bold">We Provide the Best Product Worldwide!</h1>
                        <p class="py-3 md:my-6">Championing technology's role in preparing and empowering the UK for what comes next, delivering a better future for people, society</p>
                    </div>
                    <div className=''>
                        <img src={landing} alt='' class=" w-full rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Landing;