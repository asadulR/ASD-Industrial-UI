import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../components/Auth/firebase.init';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { productId } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const { isLoading, error, data: product, refetch } = useQuery('available', () =>
        fetch(`http://localhost:4000/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message;
    const { img, name, availableQuantity, description, _id, minOrderQ, price } = product;




    // 

    const onSubmit = data => {
        data.productName = name;
        data.productId = _id;
        data.status = 'Pending';
        data.img = img;
        data.singleItemPrice = price;

        const addToCardUrl = `http://localhost:4000/cardItem`;


        fetch(addToCardUrl, {
            method: 'POST',
            headers: {
                'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Product Added to Card!");
            })

        //  update item
        const updatedProductQuntity = { availableQuantity: availableQuantity - data.orderQuantity };
        // console.log(updatedProductQuntity);

        const url = `http://localhost:4000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedProductQuntity)
        })

            .then(res => res.json())
            .then(data => {
                console.log('Success: ', data)
                refetch()
                // toast.success('Inventory Restocked!');
                // alert('Qusntity updated successfully')

            })
            .catch((error) => {
                console.error("Error: ", error)
            });

        reset()
    };

    let orderError;


    if (error) {
        orderError = <p className='text-red-700 m-0'><small>{error?.message}</small></p>
    }

    return (
        <section className=' bg-accent pt-20 md:pt-32 container mx-auto'>
            <h2 className='text-2xl md:text-4xl font-extrabold text-primary my-10 text-center'>Add <span className='text-secondary'>{name}</span> to <br /> your order list</h2>
            <div className="grid px-3 grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div><img className='rounded-lg' src={img} alt="" /></div>
                <div>
                    <h3 className='text-xl md:text-3xl mb-5 font-bold text-secondary'>{name}</h3>
                    <p className='font-semibold text-lg md:text-xl'>Available Quantity: {availableQuantity}</p>
                    <p className='font-semibold text-lg md:text-xl'>Min Order Quantity: {minOrderQ}</p>
                    <p className='font-semibold text-lg md:text-xl'>Price per Quantity: ${price}</p>
                    <p className='mt-3'>{description}</p>
                    {
                        (availableQuantity < minOrderQ) && <p className='text-error'>We don't have enough product in stock! Please try another one.</p>

                    }
                </div>
            </div>


            <div className='flex bg-accent px-2 justify-center items-center mb-20'>
                <div className="card flex-shrink-0 mt-20 md:mt-28 mb-4 w-full max-w-xl shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <h1 className=' text-2xl text-center font-bold text-primary mb-6'>Provide some information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input type="email" value={user?.email} readOnly className="input input-bordered mb-5"
                                    {...register("buyerEmail")}
                                />
                            </div>
                            <div className="form-control">
                                <input type="text" value={user?.displayName} readOnly className="input input-bordered mb-5"
                                    {...register("buyerName")}
                                />

                            </div>
                            <div className="form-control">
                                <input type="number" placeholder='Enter your phone number' className="input input-bordered"
                                    {...register("phoneNumber", {
                                        required: {
                                            value: true,
                                            message: "Number is Required"
                                        },
                                        minLength: {
                                            value: 11,
                                            message: `Invalid number!`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phoneNumber.message}</span>}
                                    {errors.phoneNumber?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.phoneNumber.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Enter your address" className="input input-bordered"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder='Order Quantity' className="input input-bordered"
                                    {...register("orderQuantity", {
                                        required: {
                                            value: true,
                                            message: "Order quantity is Required"
                                        },
                                        min: {
                                            value: minOrderQ,
                                            message: `Min order quantity is ${minOrderQ}`
                                        },
                                        max: {
                                            value: availableQuantity,
                                            message: "Order quantity can't be longer than available quantity"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-700">{errors.orderQuantity.message}</span>}
                                    {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-700">{errors.orderQuantity.message}</span>}
                                    {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-700">{errors.orderQuantity.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Add To Card' />
                            </div>
                        </form>
                        {orderError}
                    </div>
                </div>
            </div>
            <Toaster />

            <Footer />
        </section>
    );
};

export default Purchase;