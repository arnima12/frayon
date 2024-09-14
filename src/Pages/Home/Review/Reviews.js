import React, { useEffect, useState } from 'react';
import Review from './Review';
import PrimaryButton from '../../../components/PrimaryButton';
import { Link } from 'react-router-dom';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frayon-server-mlizzrd6c-arnima12s-projects.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-24 px-12">
            <h1 className="text-4xl text-center mb-16">Our Customers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {reviews.slice(0, 3).map((review) => <Review key={review._id} review={review} />)}
            </div>
            <div className="flex justify-center mt-8"><button className="btn text-black hover:text-white"><Link to="/customers">Show More</Link></button></div>

        </div>
    );
};

export default Reviews;