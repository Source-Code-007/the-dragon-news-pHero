import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const HomepageMiddle = () => {
    const { id } = useParams()
    const [newsData, setNewsData] = useState('')

    // fetch/load news data
    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, [])


    // destructuring news data based on unique params id 
    let author, details, image_url, title, rating, total_view;
    if (newsData) {
        const custom = newsData.find(d => d.category_id === id)
        if (custom) {
            ({ author, details, image_url, title, rating, total_view } = custom);
        }
    }

    // If the "params id" parameter has a value of 0, then all categories data will be displayed; otherwise, only the data for the specified category will be displayed.
    if (parseInt(id) === 0) {
        return (
            newsData && newsData.map(news => {
                const { author, details, image_url, title, rating, total_view } = news
                return <Card key={news._id} className='p-3 mb-3' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <div className='d-flex justify-content-between mb-2'>
                        <div className='d-flex gap-2'>
                            <img style={{ height: '60px', width: '60px' }} className='rounded-circle' src={author.img} alt="" />
                            <div>
                                <p>{author.name}</p>
                                <p>{author.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <p>Bookmark</p>
                        </div>
                    </div>
                    <h4>{title}</h4>
                    <Card.Img variant="top" src={image_url} />
                    {
                        details.length < 250 ? <p>{details}</p> : <div>
                            <p>{details.substring(0, 250)}...</p>
                            <Button variant="primary">Read More</Button>
                        </div>
                    }
                    <Card.Body>
                        <div className='d-flex justify-content-between gap-3'>
                            <p>
                                {/* {<Rating
                                initialRating={rating.number}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />} */}
                                rating
                            </p>
                            <p> <FaEye></FaEye> {total_view}</p>
                        </div>
                    </Card.Body>
                </Card>
            })
        )
    } else {
        return (
            newsData && <Card className='p-3'data-aos="zoom-in-up">
                <div className='d-flex justify-content-between mb-2'>
                    <div className='d-flex gap-2'>
                        <img style={{ height: '60px', width: '60px' }} className='rounded-circle' src={author.img} alt="" />
                        <div>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>Bookmark</p>
                    </div>
                </div>
                <h4>{title}</h4>
                <Card.Img variant="top" src={image_url} />
                {
                    details.length < 250 ? <p>{details}</p> : <div>
                        <p>{details.substring(0, 250)}...</p>
                        <Button variant="primary">Read More</Button>
                    </div>
                }
                <Card.Body>
                    <div className='d-flex justify-content-between gap-3'>
                        <p>
                            {/* {<Rating
                            initialRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />} */}
                            rating
                        </p>
                        <p> <FaEye></FaEye> {total_view}</p>
                    </div>
                </Card.Body>
            </Card>
        );
    }

};

export default HomepageMiddle;