import React from 'react';
import { useParams } from 'react-router-dom';
import HomepageRight from '../Homepage/HomepageRight';

const News = () => {
    const {id} = useParams()
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <h2>This is left side of news section</h2>
                </div>
                <div className="col-lg-3">
                    <HomepageRight></HomepageRight>
                </div>
            </div>
        </div>
    );
};

export default News;