import React from 'react';
import { Link } from 'react-router-dom';
import mike from "../images/mike.jpg";
import thought from "../images/thought.png"


const NotFound = () => {
    return (
        <div className="notFound-container">
            <img src={thought} alt="thought" className='thought-image' />
            <img src={mike} alt="notFound" className="notFound-image" />
            <p className="notFound-message">Sorry, page not found!</p>
            <Link to="/" className="notFound-link">Go back to the Home page</Link>
        </div>
    );
};

export default NotFound;

