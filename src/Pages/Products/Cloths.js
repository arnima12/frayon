import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';

const Cloths = () => {
    const [cloths, setCloths] = useState([]);
    useEffect(() => {
        fetch('https://frayon-server-mlizzrd6c-arnima12s-projects.vercel.app/products')
            .then(response => response.json())
            .then(data => setCloths(data))
    }, [])
    return (
        <div className="mt-12">
            <h1 className="text-4xl text-center mb-12 font-semibold">Clothes & Accessories</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
                {
                    cloths.map(cloth => <Cloth key={cloth._id} cloth={cloth} />)
                }
            </div>
        </div>
    );
};

export default Cloths;