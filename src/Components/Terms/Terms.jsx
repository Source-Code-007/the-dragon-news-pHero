import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='vh-100 text-center container d-flex flex-column justify-content-center align-items-center'>
            <h2>Our terms and coditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga facere est ea sunt, itaque dolorum ut mollitia! Deserunt veniam repudiandae fuga tenetur. Veniam fugiat autem consectetur quidem natus odit?</p>
            <p>Back to <Link to='/signup'>Register</Link></p>
        </div>
    );
};

export default Terms;