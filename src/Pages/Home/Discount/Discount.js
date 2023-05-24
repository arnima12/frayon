import React from 'react';
import discount from "../../../assets/discountman-removebg-preview.png";
const Discount = () => {
    return (
        <div className="hero bg-yellow-500 mt-24">
  <div className="hero-content flex-col lg:flex-row-reverse py-0">
    <img src={discount} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg" alt="discount"/>
    <div className="p-20">
      <h1 className="text-5xl font-bold animate-bounce text-red-600">DISCOUNT</h1>
    </div>
  </div>
</div>
    );
};

export default Discount;