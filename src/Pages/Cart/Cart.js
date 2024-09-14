import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
const Cart = () => {
    const { user, buyNow } = useContext(AuthContext);
    const url = `https://frayon-server-mlizzrd6c-arnima12s-projects.vercel.app/cart?email=${user?.email}`;
    const { data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
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
    return (
        <div className="pt-8">
            <h1 className="text-center text-3xl">Your cart </h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-8">

                    <tbody>
                        {cart.map(dress => <tr key={dress._id} dress={dress}>
                            <td><div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={dress.image} className="w-24" alt="dress" />
                                </div>
                            </div></td>
                            <td>{dress.name}</td>
                            <td>${dress.price}</td>
                            <td><button onClick={() => buyNow(dress)} className="btn btn-primary text-black "><Link to="/dashboard">Buy Now</Link></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;