import React from 'react';
import { FaRegHandPointLeft } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className='container mx-auto  mt-16 md:mt-16'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content my-6 px-4">
                    <div className='flex justify-end'><label for="my-drawer-2" className=' drawer-button text-right text-primary lg:hidden text-3xl cursor-pointer'><FaRegHandPointLeft /></label></div>
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu py-2 overflow-y-auto  w-48 gap-6 md:w-60 bg-accent text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mt-6'><NavLink className='w-full' to='/dashboard'>My Orders</NavLink></li>
                        <li className=''><NavLink className='w-full' to='/dashboard/add-review'>Add A Review</NavLink></li>
                        <li className=''><NavLink className='w-full' to='/dashboard/my-profile'>My Profile</NavLink></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;