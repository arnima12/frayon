import React from 'react';
import background from "../../../assets/background.jpg";
import { Link } from 'react-router-dom';


const Banner = () => {
    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-content text-center bg-gray-700 bg-opacity-50 text-white rounded-lg">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">Where fashion meets creativity</h1>
                    <p className="py-6">Unleash your style. Embrace individuality. Discover, create, impress. Elevate, empower, inspire.</p>
                    <button className="btn "><Link to="/products">Shop now</Link></button>
                </div>
            </div>
        </div>






    );
};

export default Banner;