import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, setOrders, orders }) => {
    const { _id, orderQuantity, status, singleItemPrice, productName, img } = order;

    //  handle card item delete
    const handleDelete = (_id) => {
        //  deleting inventory from allitems collection
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
                        <label for="my-modal-6" class="btn  btn-error btn-sm modal-button">Delete</label>
                    </>
                }
                {
                    order?.status === 'Paid' && <span className='font-semibold text-success'>Paid</span>
                }
            </td>
            <Toaster />


            {/* <input type="checkbox" id="my-modal-6" class="modal-toggle" /> */}
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want to cancel your order?</h3>
                    <p class="py-4">You are canceling {productName} from your order list. And you haven't paid for it yet.</p>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default OrderRow;