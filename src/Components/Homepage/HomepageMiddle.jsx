import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const HomepageMiddle = () => {
    const { id } = useParams()
    const [newsData, setNewsData] = useState('')

    // load news data
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
                return <Card key={news._id} className='p-3 mb-3'>
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
                            <p>{details.substring(0, 250)}</p>
                            <Button variant="primary">Read More</Button>
                        </div>
                    }
                    <Card.Body>
                        <div className='d-flex justify-content-between gap-3'>
                            <p>{rating.number}</p>
                            <p>{total_view}</p>
                        </div>
                    </Card.Body>
                </Card>
            })
        )
    } else {
        return (
            newsData && <Card className='p-3'>
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
                        <p>{details.substring(0, 250)}</p>
                        <Button variant="primary">Read More</Button>
                    </div>
                }
                <Card.Body>
                    <div className='d-flex justify-content-between gap-3'>
                        <p>{rating.number}</p>
                        <p>{total_view}</p>
                    </div>
                </Card.Body>
            </Card>
        );
    }

};

export default HomepageMiddle;