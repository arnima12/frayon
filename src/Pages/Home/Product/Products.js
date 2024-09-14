import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://frayon-server-mlizzrd6c-arnima12s-projects.vercel.app/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="mt-24">
            <h1 className="text-3xl text-center mb-12">Clothes & Accessories</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8">

                {
                    products.slice(0, 3).map((product) => <Product
                        key={product._id} product={product}></Product>)
                }

            </div>
            <div className="flex justify-center mt-8">
                <button className="btn text-black hover:text-white"><Link to="/products">Show More</Link></button>
            </div>
        </div>
    );
};

export default Products;