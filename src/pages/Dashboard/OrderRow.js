import React from 'react';

const OrderRow = ({ order }) => {
    const { _id, orderQuantity, status, singleItemPrice, productName, img } = order;

    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-20 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold text-sm md:text-lg">{productName}</div>
                        <div class="text-sm opacity-50">Pieces: {orderQuantity}</div>
                        <div class="text-sm opacity-50">Total: ${singleItemPrice * orderQuantity}</div>
                    </div>
                </div>
            </td>
            <td>
                {status}
            </td>
            <td className='text-center'>
                {
                    order?.status === 'Pending' &&
                    <>
                        <button className='btn btn-success text-white btn-sm  mr-3'>Payment</button>
                        <button className='btn btn-error btn-sm'>Delete</button>
                    </>
                }
                {
                    order?.status === 'Paid' && <span className='font-semibold text-success'>Paid</span>
                }
            </td>
        </tr>
    );
};

export default OrderRow;