import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("product.json").then(res => res.json()).then(data => setProducts(data))
    },[]);
    return (
        <section>
            <h4 className='text-center text-secondary font-bold text-xl mt-12 md:mt-24'>Popular products</h4>
            <h2 className='text-center mt-4 md:mt-8 font-bold text-primary text-2xl md:text-5xl'>We have the best quality <br />
                industrial products.</h2>

            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
                {
                    products.map(product => <Product
                    product={product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default Products;