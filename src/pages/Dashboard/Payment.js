import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0sFbGquOMSRORHwelQOLdRt2bmPIcZpPbq0axCnnI8AeZrstuUEDTja7uFqOGIh4AE7I5Ee84L3JJsfziE3vA400SaurUASl');
const Payment = () => {
    const { id } = useParams();

    const { isLoading, error, data: product, refetch } = useQuery('available', () =>
        fetch(`https://asd-industrial.herokuapp.com/cardItem/${id}`).then(res =>
            res.json()
        )
    )
    console.log(product);
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message;
    const { address, buyerName, buyerEmail, img, orderQuantity, _id, phoneNumber, productName, singleItemPrice, status } = product;

    return (
        <section className='mb-5'>
            <h2 className='text-lg md:text-3xl text-primary text-center font-bold'>Paying for <span className='text-secondary'>{productName}</span></h2>

            <div className='grid items-center grid-cols-1 mt-6 md:mt-10 md:grid-cols-2 gap-6'>
                <div>
                    <img className='rounded-lg' src={img} alt="Product Avatar" />
                </div>
                <div>
                    <h3 className=' font-semibold text-lg text-secondary'>Order details: </h3>
                    <p className='text-lg'><span className='font-semibold mt-6'>Product Name:</span> {productName}</p>
                    <p className='text-lg'><span className='font-semibold'>Order Quantity:</span> {orderQuantity}</p>
                    <p className='text-lg'><span className='font-semibold'>Price per item:</span> ${singleItemPrice}</p>
                    <p className='text-lg'><span className='font-semibold'>Total Price</span> ${singleItemPrice * orderQuantity}</p>
                    <p className='text-lg'><span className='font-semibold'>Buyer:</span> {buyerName}</p>
                    <p className='text-lg'><span className='font-semibold'>Buyer Email:</span> {buyerEmail}</p>
                    <p className='text-lg'><span className='font-semibold'>Phone Number:</span> {phoneNumber}</p>
                    <p className='text-lg'><span className='font-semibold'>Buyer Address:</span> {address}</p>

                </div>
            </div>
            <div className="card max-w-md mx-auto mt-10 bg-accent shadow-xl">
                <div className="card-body">

                    <p className='text-lg font-bold text-primary mb-6'>Pay with your card</p>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm  product={product}/>
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;