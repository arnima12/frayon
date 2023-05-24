import React from 'react';
import shipping from "../../../assets/free-shipping.png";
import order from "../../../assets/order.png";
import discount from "../../../assets/discount.png";
import Service from './Service';
const Services = () => {
    const serviceData = [
        {
            id:1,
            name: "Free Shipping",
            icon: shipping,
            bgClass: 'bg-gradient-to-r from-primary to-base-100',
            textClass: "text-black"
        },
        {
            id:2,
            name: "Order Online",
            icon: order,
            bgClass: 'bg-red-500',
            textClass: "text-white"
        },
        {
            id:3,
            name: "Shop & Save",
            icon: discount,
            bgClass: 'bg-gradient-to-r from-primary to-base-100',
            textClass: "text-black"
        }
    ]
    return (
        <div className="mx-auto px-6 mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceData.map(service=>
                <Service key={service.id} service={service}></Service>
            )}
        </div>
        </div>
    );
};

export default Services;