import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../components/Auth/firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    // const { isLoading, error, data: product, refetch } = useQuery('available', () =>
    //     fetch(`https://asd-industrial.herokuapp.com/product/${productId}`).then(res =>
    //         res.json()
    //     )
    // )
    // if (isLoading) return <Loading />
    // if (error) return 'An error has occurred: ' + error.message;
    // const { img, name, availableQuantity, description, _id, minOrderQ, price } = product;




    // 

    const onSubmit = data => {
        // console.log(user)
        data.avatar = user?.photoURL
        const reviewUrl = `https://asd-industrial.herokuapp.com/add-review`;
        fetch(reviewUrl, {
            method: 'POST',
            headers: {
                'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Thanks for your review!");
            })


        reset()
    };

    let orderError;


    // if (error) {
    //     orderError = <p className='text-red-700 m-0'><small>{error?.message}</small></p>
    // }

    return (
        <section className=''>
            <h2 className='text-center text-xl md:text-3xl text-secondary font-bold'>Please share your experiences <br /> <span className='text-sm md:text-md text-primary'>What do you think about our product?</span></h2>

            <div className='flex  px-2 justify-center items-center mb-20'>
                <div className="card bg-accent flex-shrink-0 mt-10 md:mt-10 mb-4 w-full max-w-xl shadow-2xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input type="email" value={user?.email} readOnly className="input input-bordered mb-5"
                                    {...register("reviewerEmail")}
                                />
                            </div>
                            <div className="form-control">
                                <input type="text" value={user?.displayName} readOnly className="input input-bordered mb-5"
                                    {...register("name")}
                                />

                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Your city' className="input input-bordered"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: "City is Required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-700">{errors.city.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Your profession' className="input input-bordered"
                                    {...register("profession", {
                                        required: {
                                            value: true,
                                            message: "Profession is Required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.profession?.type === 'required' && <span className="label-text-alt text-red-700">{errors.profession.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="range" min="1" max="5" defaultValue="2" className="range range-primary" step=".5"
                                    {...register("ratings")}
                                />
                                <div className="w-full flex justify-between text-xs px-2 mb-3">
                                    <span>1 Star</span>
                                    <span>2 Star</span>
                                    <span>3 Star</span>
                                    <span>4 Star</span>
                                    <span>5 Star</span>
                                </div>
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" placeholder="Say something ..."
                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: "Please say something"
                                        }
                                    })}
                                ></textarea>
                                <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-700">{errors.review.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Add Review' />
                            </div>
                        </form>
                        {orderError}
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default AddAReview;