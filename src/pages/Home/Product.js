import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, refetch }) => {
    const { img, name, availableQuantity, description, _id, minOrderQ, price } = product;
    // console.log(product);
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card shadow-xl bg-primary transition ease-in-out delay-100 hover:bg-cyan-900 duration-500">
            <div className="card-body text-center">
                <div className="avatar">
                    <div className="max-w-sm mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <h2 className=" text-xl text-base-100 mb-2 font-bold">{name}</h2>
                <small className='flex justify-evenly text-white'><span>Quantity: <span className='text-secondary font-bold'>{availableQuantity}</span></span> <span>Price: <span className='text-secondary font-bold'>${price}</span></span> <span>MOQ: <span className='text-secondary font-bold'>{minOrderQ}</span></span></small>
                <p className='text-base-100 font-normal text-left'>{description}</p>
                <button onClick={() => navigateToPurchase(_id)} className='btn btn-secondary mt-5' disabled={availableQuantity < minOrderQ}>Purchase Now</button>
            </div>
        </div>
    );
};

export default Product;