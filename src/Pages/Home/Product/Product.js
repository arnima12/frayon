import React from 'react';

const Product = ({ product }) => {
    
    const { name, image, price } = product;
    
    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Clothes" className="w-64 h-64" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                
            </div>
        </div>
    );
};

export default Product;