import React from 'react';
import { FaRegHandPointLeft, FaShoppingCart, FaSmileBeam, FaUserEdit} from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

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
                    <ul class="menu py-2 overflow-y-auto  w-48 gap-2 md:w-60 bg-slate-800 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mt-6'><Link className='w-full focus:bg-primary font-bold text-white'  to='/dashboard'>My Orders <FaShoppingCart /></Link></li>
                        <li className=''><Link className='w-full focus:bg-primary font-bold text-white' to='/dashboard/add-review'>Add A Review <FaSmileBeam/></Link></li>
                        <li className=''><Link className='w-full focus:bg-primary font-bold text-white' to='/dashboard/my-profile'>My Profile <FaUserEdit/></Link></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;