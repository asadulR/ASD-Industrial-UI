import React from 'react';
import bg from '../../assets/Images/bg.jpg';

import { FaTools, FaCloudSun, FaGasPump,FaRegGem } from "react-icons/fa";
const WeProvide = () => {
    return (
        <section className='py-10 md:py-28' style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }}>
            <h2 className=' text-3xl text-center md:text-5xl font-bold max-w-xl mx-auto text-base-100 mb-20' style={{fontFamily: 'Courgette,cursive'}}>We Manufacture Best Machine
                For Industries</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2'>
                <div class="card shadow-xl bg-primary transition ease-in-out delay-100 hover:-translate-y-2 hover:bg-info duration-500">
                    <div class="card-body text-center">

                        <div class="avatar">
                            <div class="w-24 mx-auto mb-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <FaTools className=' text-6xl mx-auto text-secondary mt-4' />
                            </div>
                        </div>
                        <h2 class=" text-xl text-base-100 mb-2 font-bold">Fuel Pump Nozell</h2>
                        <p class='text-base-100 font-normal'>We manufacture a large number of Fuel Pump Nozell yearly. We are the most popular manufacturer conpany for this machine.</p>

                    </div>
                </div>
                <div class="card shadow-xl bg-primary transition ease-in-out delay-100 hover:-translate-y-2 hover:bg-info duration-500">
                    <div class="card-body text-center">
                    <div class="avatar">
                            <div class="w-24 mx-auto mb-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <FaCloudSun className=' text-6xl mx-auto text-accent mt-4' />
                            </div>
                        </div>
                        <h2 class=" text-xl text-base-100 mb-2 font-bold">Power And Energy</h2>
                        <p class='text-base-100 font-normal'>We have been manufacturing solar power machine for 9 years. We get 1000+ customers every year buying from us.</p>
                    </div>
                </div>
                <div class="card shadow-xl bg-primary transition ease-in-out delay-100 hover:-translate-y-2 hover:bg-info duration-500">
                    <div class="card-body text-center">
                    <div class="avatar">
                            <div class="w-24 mx-auto mb-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <FaGasPump className=' text-6xl mx-auto text-red-500 mt-4' />
                            </div>
                        </div>
                        <h2 class=" text-xl text-base-100 mb-2 font-bold">GAS Stove</h2>
                        <p class='text-base-100 font-normal'>We manufacturer gas stove. We have 5 models of this product. This is one of the best manufacturing products in our company.</p>
                    </div>
                </div>
                <div class="card shadow-xl bg-primary transition ease-in-out delay-100 hover:-translate-y-2 hover:bg-info duration-500">
                    <div class="card-body text-center">
                    <div class="avatar">
                            <div class="w-24 mx-auto mb-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <FaRegGem className=' text-6xl mx-auto text-success mt-4' />
                            </div>
                        </div>
                        <h2 class=" text-xl text-base-100 mb-2 font-bold">Portable Generator</h2>
                        <p class='text-base-100 font-normal'>Portable Generator is our another best manufacturing item. We have a hudge number of orders for this highly demanding machine.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default WeProvide;