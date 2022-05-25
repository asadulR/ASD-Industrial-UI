import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../components/Auth/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(user)
        data.avatar = user?.photoURL
        const url = `http://localhost:4000/add-user/${user?.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                // 'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Profile Updated!");
                console.log(result);
            })


        reset()
    };

    let orderError;

    return (
        <section>
            <h2 className='text-primary text-xl md:text-3xl font-extrabold text-center'>Update your Informaton</h2>


            <div class="card max-w-xl m-auto bg-success shadow-xl mt:12 md:mt-20">
                <figure><img className='rounded-lg mt-5' src={user?.photoURL} alt="Shoes" /></figure>
                <div class="card-body">
                    <h3 className='text-white text-lg'>Name: {user?.displayName}</h3>
                    <p className='text-white text-lg'>Email: {user?.email}</p>
                    {
                        user?.emailVerified === false &&
                        <p className=' text-red-600'>Email is not verified. Please Login with a valied email address.</p>}
                </div>
            </div>
            <div className='flex  px-2 justify-center items-center mb-20'>
                <div className="card bg-accent flex-shrink-0 mt-10 md:mt-10 mb-4 w-full max-w-xl shadow-2xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input type="email" value={user?.email} readOnly className="input input-bordered mb-5"
                                    {...register("userEmail")}
                                />
                            </div>
                            <div className="form-control">
                                <input type="text" value={user?.displayName} readOnly className="input input-bordered mb-5"
                                    {...register("userName")}
                                />

                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Your city' className="input input-bordered"
                                    {...register("userCity", {
                                        required: {
                                            value: true,
                                            message: "City is Required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.userCity?.type === 'required' && <span className="label-text-alt text-red-700">{errors.userCity.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Your Education' className="input input-bordered"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: "Education is Required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-700">{errors.education.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder='Phone number' className="input input-bordered"
                                    {...register("phoneNumber", {
                                        required: {
                                            value: true,
                                            message: "Phone number is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phoneNumber.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Linkedin URL' className="input input-bordered"
                                    {...register("linkedin", {
                                        required: {
                                            value: true,
                                            message: "Linkedin is Required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-700">{errors.linkedin.message}</span>}
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Update profile' />
                            </div>
                        </form>
                        {orderError}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;