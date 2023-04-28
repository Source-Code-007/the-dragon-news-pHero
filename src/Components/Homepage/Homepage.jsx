import React, { useEffect, useState } from 'react';
import HomepageRight from './HomepageRight';
import { Outlet } from 'react-router-dom';
import HomepageLeft from './HomepageLeft';

const Homepage = () => {
    const [categories, setCategories] = useState()

    // fetch/load catagories data for left side nav
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(e => console.log(e.message))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    {
                        categories && categories.map(category => {
                            return <HomepageLeft key={category.id} categoryID={category.id} categoryName={category.name}></HomepageLeft>
                        })

                    }
                </div>

                <div className="col-lg-6">
                    {
                        <Outlet></Outlet>
                    }
                </div>

                <div className="col-lg-3">
                    <HomepageRight></HomepageRight>
                </div>
            </div>
        </div>
    );
};

export default Homepage;