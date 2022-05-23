import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Purchase = () => {
    const { productId } = useParams();


    const { isLoading, error, data: product, refetch } = useQuery(['available'], () =>
        fetch(`http://localhost:4000/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message;
    const { img, name, availableQuantity, description, _id, minOrderQ, price } = product;
    return (
        <section className='my-20 md:my-32 container mx-auto'>
            <h2 className='text-2xl md:text-4xl font-extrabold text-primary my-10 text-center'>Add <span className='text-secondary'>{name}</span> to <br /> your order list</h2>
            <div className="grid px-3 grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div><img className='rounded-lg' src={img} alt="" /></div>
                <div>
                    <h3 className='text-xl md:text-3xl mb-5 font-bold text-secondary'>{name}</h3>
                    <p className='font-semibold text-lg md:text-xl'>Available Quantity: {availableQuantity}</p>
                    <p className='font-semibold text-lg md:text-xl'>Min Order Quantity: {minOrderQ}</p>
                    <p className='font-semibold text-lg md:text-xl'>Price per Quantity: ${price}</p>
                    <p className='mt-3'>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default Purchase;