import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../components/Auth/firebase.init';
import Loading from '../../components/Loading/Loading';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:4000/myitems?email=${email}`
    useEffect( () => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
        setLoading(false)
    },[setLoading, url])

    if (isLoading) return <Loading />

    return (
        <section>
            <h2 className='text-center text-secondary mb-6 md:mb-8 text-2xl md:text-4xl font-bold'>You have ordered {orders.length} <br /> products so far</h2>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className=''>Name</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            orders={orders}
                            setOrders={setOrders}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrder;