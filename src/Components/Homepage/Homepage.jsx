import React, { useEffect, useState } from 'react';
import HomepageRight from './HomepageRight';
import HomepageMiddle from './HomepageMiddle';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [categories, setCategories] = useState()
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
                                return <Link to={`/category/${category.id}`} className=' d-block text-center text-decoration-none fw-bold text-secondary my-1 shadow py-3 px-2 rounded-2'
                                    key={category.id}>
                                    {category.name} </Link>
                            })

                        }
                </div>

                <div className="col-lg-6">
                    <HomepageMiddle></HomepageMiddle>
                </div>

                <div className="col-lg-3">
                    <HomepageRight></HomepageRight>
                </div>
            </div>
        </div>
    );
};

export default Homepage;