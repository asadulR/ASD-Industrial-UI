import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BusinessSummary = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='bg-primary px-4 py-8'>
                    <h2 className='text-xl md:text-4xl text-white font-extrabold'>Quality Resourcing <br /><span className='text-secondary'> & Analytics</span></h2>
                    <p className=' font-semibold text-white mt-5'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                    <p className='text-white my-4'><FaCheckCircle className='inline' /> In enim justo, rhoncus ut, imperdiet a, venenatis vitae.</p>
                    <p className='text-white '><FaCheckCircle className='inline' /> Nullam dictum felis eu pede mollis pretium.</p>
                    <p className='text-white my-4'><FaCheckCircle className='inline' /> Vivamus elementum semper nisi. Aenean vulputate. eleifend</p>
                    <Link to='/portfolio' className='btn md:mt-10 btn-secondary'>Explore more</Link>
                </div>
                <div className='bg-secondary  px-4 py-8 md:py-24'>
                    <h2 className='text-white text-xl md:text-4xl font-extrabold mb-6'>Get a solution for all <br /> your Industries needs.</h2>

                    <span className='mb-5 text-white'>Production 80%</span>
                    <progress className="progress progress-success " value="80" max="100"></progress>
                    <span className='mb-5 text-white'>International 70%</span>
                    <progress className="progress progress-success " value="70" max="100"></progress>
                    <span className='mb-5 text-white'>Customer Satisfaction 90%</span>
                    <progress className="progress progress-success " value="90" max="100"></progress>
                    <span className='mb-5 text-white'>Utilization Rate 60%</span>
                    <progress className="progress progress-success " value="60" max="100"></progress>
                </div>
                <div className='bg-primary px-4 py-8 md:py-24'>
                    <h2 className='text-xl md:text-4xl text-secondary font-bold'>We can work with Big <br /> & Small Clients</h2>

                    <p className='text-white my-10'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>

                    <div className='flex gap-6 justify-evenly'>
                        <div>
                            <h4 className='text-4xl text-white font-extrabold '>86+</h4>
                            <p className='text-secondary font-semibold'>Branch</p>
                        </div>
                        <div>
                            <h4 className='text-4xl text-white font-extrabold '> 50+</h4>
                            <p  className='text-secondary font-semibold'>Tools</p>
                        </div>
                        <div>
                            <h4 className='text-4xl text-white font-extrabold '>72k</h4>
                            <p  className='text-secondary font-semibold'>Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;