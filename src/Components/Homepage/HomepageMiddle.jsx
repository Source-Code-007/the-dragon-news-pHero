import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useParams } from 'react-router-dom';

// AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authContext } from '../../AuthContext/AuthContext';
AOS.init();


const HomepageMiddle = () => {
    const { loading, setLoading } = useContext(authContext)
    const { id } = useParams()
    const [newsData, setNewsData] = useState('')
    const [showAllData, setShowAllData] = useState(true)

    // fetch/load news data
    useEffect(() => {
        setLoading(true)
        fetch(`https://the-dragon-news-server-seven.vercel.app/categories/${id || 0}`)
            .then(res => res.json())
            .then(data =>{
                setNewsData(data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div className='text-center d-flex justify-content-center align-items-center' style={{ height: '300px' }}><div className='animate-spinner'></div></div>
    }

    return (
        <>
            {newsData && newsData.slice(0, showAllData ? 5 : newsData.length).map(news => {
                const { author, details, image_url, title, rating, total_view, _id } = news
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
                            <span className='me-2'><FaRegBookmark></FaRegBookmark></span>
                            <span><FaShareAlt></FaShareAlt></span>
                        </div>
                    </div>
                    <h4>{title}</h4>
                    <Card.Img variant="top" src={image_url} />
                    {
                        details.length < 250 ? <p>{details}</p> : <div>
                            <p>{details.substring(0, 250)}...</p>
                            <Link to={`/news/${_id}`}><button className='btn btn-secondary'>Read More</button></Link>
                        </div>
                    }
                    <Card.Body>
                        <div className='d-flex justify-content-between gap-3'>
                            <div>
                                {<Rating style={{ maxWidth: 120 }} readOnly value={rating.number} />}
                            </div>
                            <p> <FaEye></FaEye> {total_view}</p>
                        </div>
                    </Card.Body>
                </Card>
            })}
            {newsData.length > 5 && <button className='btn btn-primary' onClick={() => setShowAllData(!showAllData)}>{showAllData ? 'Show all data' : 'Shows less'}</button>}
        </>
    )

};

export default HomepageMiddle;