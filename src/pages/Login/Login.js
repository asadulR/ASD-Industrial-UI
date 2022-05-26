import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../components/Auth/firebase.init';
import Loading from '../../components/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passReseterror] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const onSubmit = data => {
        // console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset();
    };
    let resetError;
    let signInErrorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [logedinUser] = useAuthState(auth);
    useEffect(() => {
        if (user || guser) {
            //  generating a tocken for the backend 
            const url = 'https://asd-industrial.herokuapp.com/login';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: logedinUser?.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('accessToken', data.token);
                });


            console.log(logedinUser?.email)
        }
    }, [logedinUser, guser, user])

    useEffect(() => {
        if (user || guser) {
            // console.log(user || guser);
            navigate(from, { replace: true });
        }
    }, [from, navigate, guser, user])

    if (loading || gloading || sending) {
        return <Loading />
    }

    if (error || gerror || passReseterror) {
        signInErrorMessage = <p className='text-red-700 m-0'><small>{error?.message || gerror?.message}</small></p>
    }




    const resetPassword = async () => {
        resetError = ''
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            resetError = <p className='text-danger'>Error: Please provide your email</p>
            toast.error('please enter your email address');
        }
    }
    return (
        <section className='flex bg-accent px-2 justify-center items-center'>
            <div className="card flex-shrink-0 mt-20 md:mt-28 mb-4 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <h1 className=' text-2xl text-center font-bold text-primary mb-6'>LOGIN</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Enter your password" className="input input-bordered"
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
                                <Link to='/signup' className="label-text-alt link mr-5 link-hover">New here? Signup</Link>
                                <p onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        {resetError}
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Login' />
                        </div>
                    </form>
                    {signInErrorMessage}
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn  btn-primary'>Continue with google</button>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Login;