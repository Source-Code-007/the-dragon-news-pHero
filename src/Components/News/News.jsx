import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HomepageRight from '../Homepage/HomepageRight';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const { id } = useParams()
    const [newsData, setNewsData] = useState()
    useEffect(() => {
        fetch(`https://the-dragon-news-server-seven.vercel.app/news/${id}`)
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, [])
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-9">
                    <h4>Dragon News</h4>
                    {
                        newsData && <Card className='p-3 mb-3'>
                            <Card.Img variant="top" src={newsData.image_url} />
                            <Card.Body>
                                <h3>{newsData.title}</h3>
                                <p className='my-3'>{newsData.details}</p>
                                <Link to={`/category/${newsData.category_id}`}><Button variant="danger"> <FaArrowLeft/> All news in this category</Button></Link>
                            </Card.Body>
                        </Card>
                    }
                </div>
                <div className="col-lg-3">
                    <HomepageRight></HomepageRight>
                </div>
            </div>
        </div>
    );
};

export default News;