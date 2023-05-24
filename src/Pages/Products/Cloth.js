import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Cloth = ({cloth}) => {
    const {name,price,image,_id} = cloth;
    const {handleCart} = useContext(AuthContext);
   
    return (
        <div key={_id} className="card card-compact w-96 bg-base-100 shadow-xl mt-12">
  <figure><img src={image} alt="Clothes" className="w-64 h-64" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
    <button onClick={()=>handleCart(cloth)} className="btn border-primary text-black hover:bg-yellow-700">Add to Cart</button>
      <button className="btn btn-primary text-black">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Cloth;