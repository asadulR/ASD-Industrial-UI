import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, setOrders, orders }) => {
    const { _id, orderQuantity, status, singleItemPrice, productName, img } = order;

    //  handle card item delete
    const handleDelete = (_id) => {
        const proceed = window.confirm('Want to cancel your order?')

        const myItemDeleteUrl = `https://asd-industrial.herokuapp.com/delete-myitems/${_id}`;
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
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-sm md:text-lg">{productName}</div>
                        <div className="text-sm opacity-50">Pieces: {orderQuantity}</div>
                        <div className="text-sm opacity-50">Total: ${singleItemPrice * orderQuantity}</div>
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
                        <Link to={`/dashboard/payment/${_id}`} className='btn btn-success text-white btn-sm  mr-3'>Payment</Link>
                        {/* <button for="my-modal-6"  className='btn btn-error btn-sm'>Delete</button> */}
                        <label onClick={() => handleDelete(_id)} class="btn  btn-error btn-sm modal-button">Delete</label>
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