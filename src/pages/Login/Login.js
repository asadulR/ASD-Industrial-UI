import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='flex bg-accent px-2 justify-center items-center'>
            <div className="card flex-shrink-0 mt-20 md:mt-28 mb-4 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <h1 className=' text-2xl text-center font-bold text-primary'>LOGIN</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/signup' className="label-text-alt link link-hover">New here? Signup</Link>
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-glass hover:btn-accent'>Continue with google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;