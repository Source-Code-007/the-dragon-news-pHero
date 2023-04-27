import React from 'react';
import { NavLink } from 'react-router-dom';

const HomepageLeft = ({ categoryID, categoryName }) => {
    return (
        <div>
            <NavLink to={`/category/${categoryID}`} className={({isActive})=> `d-block text-center text-decoration-none fw-bold text-secondary my-1 border py-3 px-2 rounded-2 ${ isActive ?  `bg-secondary text-white` : ``} `}>
                {categoryName}</NavLink>
        </div>
    );
};

export default HomepageLeft;