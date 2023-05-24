import React from 'react';

const Review = ({review}) => {
    const {name,image,description} = review;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-8">
  <div className="avatar">
  <div className="w-46 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} alt={review}/>
  </div>
</div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default Review;