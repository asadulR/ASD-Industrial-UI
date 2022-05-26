import React from 'react';
import { FaAlignRight, FaShoppingCart, FaSmileBeam, FaUserEdit } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const Dashboard = () => {
    return (
        <section className='container mx-auto  mt-16 md:mt-16'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content my-6 px-4">
                    <div className='flex justify-end'><label for="my-drawer-2" className=' drawer-button text-right text-primary lg:hidden text-xl cursor-pointer'><FaAlignRight /></label></div>
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-2 overflow-y-auto  w-48 gap-2 md:w-60 bg-slate-800 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mt-6'><Link className='w-full focus:bg-primary font-bold text-white' to='/dashboard'>My Orders <FaShoppingCart /></Link></li>
                        <li className=''><Link className='w-full focus:bg-primary font-bold text-white' to='/dashboard/add-review'>Add A Review <FaSmileBeam /></Link></li>
                        <li className=''><Link className='w-full focus:bg-primary font-bold text-white' to='/dashboard/my-profile'>My Profile <FaUserEdit /></Link></li>
                    </ul>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Dashboard;