import React from 'react';

const Service = ({service}) => {
    const {name,icon,bgClass,textClass} = service;
    return (
        <div className={`card card-side shadow-xl ${bgClass} ${textClass} px-6 py-6`}>
        <figure><img src={icon} alt="Movie" className="w-24"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    );
};

export default Service;