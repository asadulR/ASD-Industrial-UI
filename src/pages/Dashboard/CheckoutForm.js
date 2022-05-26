import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({product}) => {
    const stripe = useStripe();

    const elements = useElements();

    const [cardError, setCardError] = useState('')

    const [clientSecret, setClientSecret] = useState('')

    const {singleItemPrice, orderQuantity} = product;
    const price = singleItemPrice * orderQuantity;
    useEffect( () => {
        fetch(`http://localhost:4000/create-payment-intent`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    }, [orderQuantity, singleItemPrice, price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }



        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#6570D4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-10 w-2/4 mx-auto' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-error font-semibold'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;