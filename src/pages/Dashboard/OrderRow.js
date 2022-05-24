import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const OrderRow = ({ order, setOrders, orders }) => {
    const { _id, orderQuantity, status, singleItemPrice, productName, img } = order;

    //  handle card item delete
    const handleDelete = (_id) => {
        //  deleting inventory from allitems collection
        const proceed = window.confirm('Are you sure deleting your order?')

        if (proceed) {
            //  deleting order from card collection
            const myItemDeleteUrl = `http://localhost:4000/delete-myitems/${_id}`;
            // console.log(myItemDeleteUrl)
            fetch(myItemDeleteUrl, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingOrder = orders.filter(order => order._id !== _id);

                    setOrders(remainingOrder);
                    toast.success('Order Deleted');
                })
        }

    }
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
                        <button onClick={() => handleDelete(_id)} className='btn btn-error btn-sm'>Delete</button>
                    </>
                }
                {
                    order?.status === 'Paid' && <span className='font-semibold text-success'>Paid</span>
                }
            </td>
            <Toaster />
        </tr>
    );
};

export default OrderRow;