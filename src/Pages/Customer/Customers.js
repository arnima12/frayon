import React, { useEffect, useState } from 'react';
import Customer from './Customer';

const Customers = () => {
    const [customers,setCustomers] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setCustomers(data))
    },[])
    return (
        <div className="mt-12">
            <h1 className="text-4xl text-center mb-12 font-semibold">Our Customers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {
                customers.map(customer=><Customer key={customer._id} customer={customer}/>)
            }
        </div>
        </div>
    );
};

export default Customers;