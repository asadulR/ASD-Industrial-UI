import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from './Auth/firebase.init';
const Navbar = () => {
    const [user]= useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className=' bg-white'>
            <div className="navbar px-3 bg-base-100 fixed top-0 z-50  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost  text-primary font-bold normal-case text-xl" style={{ fontFamily: 'Courgette,cursive' }}>ASD Industrial</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 p-0">
                        <li><NavLink to='/' className=' font-semibold'>Home</NavLink></li>

                        {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
               {
               user ? <button onClick={logout} className='btn btn-ghost'>Log Out</button> :
               <NavLink to='/login' className=' font-bold btn btn-ghost'>Log In</NavLink>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;