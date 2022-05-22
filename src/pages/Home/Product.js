import React from 'react';

const Product = ({ product }) => {
    const { img, name, availableQuantity, description, minOrderQ, price } = product;
    console.log(product);
    return (
        <div class="card shadow-xl bg-primary transition ease-in-out delay-100 hover:bg-cyan-900 duration-500">
            <div class="card-body text-center">
                <div class="avatar">
                    <div class="max-w-sm mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <h2 class=" text-xl text-base-100 mb-2 font-bold">{name}</h2>
                <small className='flex justify-evenly text-white'><span>Quantity: <span className='text-secondary font-bold'>{availableQuantity}</span></span> <span>Price: <span className='text-secondary font-bold'>${price}</span></span> <span>MOQ: <span className='text-secondary font-bold'>{minOrderQ}</span></span></small>
                <p class='text-base-100 font-normal text-left'>{description}</p>
                <button className='btn btn-secondary mt-5'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;