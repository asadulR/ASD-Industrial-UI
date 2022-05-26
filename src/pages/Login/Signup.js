import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../components/Auth/firebase.init';
import Loading from '../../components/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data?.name });
    };
    const navigate = useNavigate();
    let signInErrorMessage;
    const [logedInUser] = useAuthState(auth);

    //  creating JWT token for the user
    useEffect(() => {
        if (user) {
            const url = 'http://localhost:4000/login';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: logedInUser?.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('accessToken', data.token);
                    console.log(logedInUser?.email)
                });
        }
    }, [user, logedInUser]);

    useEffect(() => {
        if (user) {
            navigate('/');
            toast.success('User created successfully!')
        };
    }, [user, navigate]);
    if (loading || updating) {
        return <Loading />
    }
    if (error || updateError) {
        signInErrorMessage = <p className='text-red-700 m-0'><small>{error?.message || updateError?.message}</small></p>
        // toast.error('Error: please try again!')
    }
    return (
        <section className='bg-accent h-screen'>
            <div className='flex bg-accent px-2 justify-center items-center'>
                <div className="card flex-shrink-0 mt-20 md:mt-28 mb-4 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <h1 className=' text-2xl text-center font-bold text-primary'>SIGNUP</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter a password" className="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                </label>
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Have an account? Login</Link>
                                </label>
                            </div>
                            {signInErrorMessage}
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Sign up' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Toaster />
        </section>
    );
};

export default Signup;