import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import Product from './Product';

const Products = () => {
    const { isLoading, error, data: products, refetch } = useQuery(['available'], () =>
        fetch(`http://localhost:4000/product`).then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading />

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <section>
            <h4 className='text-center text-secondary font-bold text-xl mt-12 md:mt-24'>Popular products</h4>
            <h2 className='text-center mt-4 md:mt-8 font-bold text-primary text-2xl md:text-5xl'>We have the best quality <br />
                industrial products.</h2>
            {/* {error} */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default Products;