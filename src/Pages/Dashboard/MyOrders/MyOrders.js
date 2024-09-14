
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const { user, totalPrice, setTotalPrice } = useContext(AuthContext)

    const url = `https://frayon-server-mlizzrd6c-arnima12s-projects.vercel.app/order?email=${user?.email}`;
    const { data: order = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })
    console.log(order);
    useEffect(() => {
        if (Array.isArray(order) && order.length > 0) {
            const calculatedTotalPrice = order.reduce((acc, item) => acc + item.price, 0);
            setTotalPrice(calculatedTotalPrice);
        }
    }, [order, setTotalPrice]);

    return (
        <div className="pt-8">
            <h1 className="text-center text-3xl">Your order ({order.length})</h1>
            <div className="overflow-x-auto">
                {order.length > 0 ? (
                    <table className="table w-full mt-8">

                        <tbody>
                            {order &&
                                order?.map(item => <tr key={item._id} item={item}>
                                    {/* <th>{item._id}</th> */}
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={item.image} className="w-24" alt="dress" />
                                        </div>
                                    </div></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>

                                </tr>)}
                            <tr>
                                <td></td>
                                <td className="text-2xl">
                                    Total Price: ${totalPrice}
                                </td>
                                <td>
                                    <button className='btn btn-primary btn-sm'
                                    >Pay</button>

                                </td>
                            </tr>
                        </tbody>
                    </table>) :
                    (
                        <p>No orders found.</p>
                    )
                }
            </div>

        </div>
    );
};

export default MyOrders;