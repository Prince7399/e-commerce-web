import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button, Carousel } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { ReactComponent as Phone } from '../../assets/Images/BrowseCategory/CellPhone.svg';
import { ReactComponent as Computers } from '../../assets/Images/BrowseCategory/Computer.svg';
import { ReactComponent as SmartWatch } from '../../assets/Images/BrowseCategory/SmartWatch.svg';
import { ReactComponent as Camera } from '../../assets/Images/BrowseCategory/Camera.svg';
import { ReactComponent as HeadPhones } from '../../assets/Images/BrowseCategory/Headphone.svg';
import { ReactComponent as Gaming } from '../../assets/Images/BrowseCategory/Gamepad.svg';
import { ReactComponent as FillHeart } from '../../assets/Images/FillHeart.svg';
import { ReactComponent as LeftArrow } from '../../assets/Images/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/Images/RightArrow.svg';
import HomeImg from '../../assets/Images/Home/iphone series14.png';
import { ReactComponent as FillEye } from '../../assets/Images/FillEye.svg';
import NoarthCoat from '../../assets/Images/Items/north_coat.png';
import DuffleBag from '../../assets/Images/Items/duffle_bag.png';
import Cooler from '../../assets/Images/Items/cpu_cooler.png';
import BookSelf from '../../assets/Images/Items/bookself.png';

import GamePad from '../../assets/Images/Items/gamepad.png';
import KeyBoard from '../../assets/Images/Items/keyboard.png';
import Monitor from '../../assets/Images/Items/monitor.png';
import Chair from '../../assets/Images/Items/chair.png';

const Home = () => {
    const [addTocartHover, setAddTocartHover] = useState('null');
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + 4 < flashSale?.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const category = [
        {
            name: 'Phone',
            img: Phone
        }, {
            name: 'Computers',
            img: Computers
        }, {
            name: 'SmartWatch',
            img: SmartWatch
        }, {
            name: 'Camera',
            img: Camera
        }, {
            name: 'HeadPhones',
            img: HeadPhones
        }, {
            name: 'Gaming',
            img: Gaming
        }
    ]

    const bestSelling = [{
        name: 'The north Coat',
        img: NoarthCoat,
        offerPrice: 260,
        price: 360,
        star: 5,
        review: 65
    },
    {
        name: 'Gucci Duffle Bag',
        img: DuffleBag,
        offerPrice: 980,
        price: 1160,
        star: 4.5,
        review: 65
    },
    {
        name: 'RGB liquid CPU Cooler',
        img: Cooler,
        offerPrice: 160,
        price: 170,
        star: 4.5,
        review: 65
    }, {
        name: 'Small BookSelf',
        img: BookSelf,
        offerPrice: 360,
        price: null,
        star: 5,
        review: 65
    }]

    const flashSale = [{
        name: 'HAVIT HV-G92 Gamepad',
        img: GamePad,
        offerPrice: 120,
        price: 160,
        star: 5,
        review: 88,
        discount: 40
    },
    {
        name: 'AK-900 Wired Keyboard',
        img: KeyBoard,
        offerPrice: 960,
        price: 1160,
        star: 4,
        review: 75,
        discount: 35
    },
    {
        name: 'IPS LCD Gaming Monitor',
        img: Monitor,
        offerPrice: 370,
        price: 400,
        star: 4,
        review: 99,
        discount: 30
    }, {
        name: 'S-Series Comfort Chair',
        img: Chair,
        offerPrice: 375,
        price: 400,
        star: 4.5,
        review: 99,
        discount: 25
    }]

    return (
        <HomeContainer className='main-container mb-5'>
            <div className="common-space">
                <div className='d-flex flex-column flex-lg-row box-space justify-content-between px-0 mx-0'>
                    <div className='border-md-end pt-5 left-content'>
                        <div className='sidebar-menu pe-2 px-3 px-md-0'>
                            <Accordion flush>
                                <Accordion.Item eventKey="0" className='border-0'>
                                    <Accordion.Header>Women's Fashion</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            <li><Link>Clothes</Link></li>
                                            <li><Link>Footware</Link></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Men's Fashion</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            <li><Link>Clothes</Link></li>
                                            <li><Link>Footware</Link></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <ul className='list-unstyled'>
                                <li><Link>Electronics</Link></li>
                                <li><Link>Home & lifestyle</Link></li>
                                <li><Link>Medicine</Link></li>
                                <li><Link>Sports & Outdoor</Link></li>
                                <li><Link>Baby's & Toys</Link></li>
                                <li><Link>Groceries & Pets</Link></li>
                                <li><Link>Health & Beauty</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-5 text-center right-content'>
                        <div className='text-md-end'>
                            <img src={HomeImg} alt="" width='95%' />
                        </div>
                    </div>
                </div>
                <div className='flash-sale mt-5 pt-5'>
                    <div className="display-item-top">
                        <div className='display-head'>
                            <span className='head-block'></span>
                            <span className='head-name'>Today's</span>
                        </div>
                        <div className="display-bottom">
                            <div className='title-focus'>
                                Flash Sale
                            </div>
                            <div>

                            </div>
                            <div className="text-center mt-md-3">
                                <Button onClick={handlePrev} className='btn-change-carousel'>
                                    <i><LeftArrow /></i>
                                </Button>
                                <Button onClick={handleNext} className='btn-change-carousel'>
                                    <i><RightArrow /></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Row xs={1} md={2} lg={4} className="g-4 card-container">
                            {flashSale?.slice(startIndex, startIndex + 4).map((item, index) => (
                                <Col key={index}>
                                    <Card className='item-card h-100' onMouseEnter={() => setAddTocartHover(item?.name)} onMouseLeave={() => setAddTocartHover('')}>
                                        <Card.Img className='card-image p-5 position-relative' variant="top" src={item?.img} />
                                        <span className='d-flex flex-column position-absolute end-0 action-icon m-2'>
                                            <i><FillHeart /></i>
                                            <i className='mt-2'><FillEye /></i>
                                        </span>
                                        <span className='discount position-absolute start-0 m-2'>
                                            -{item.discount}%
                                        </span>
                                        {addTocartHover === item?.name ? <div className='add-to-cart-btn'>
                                            Add To Cart
                                        </div> : null}
                                        <Card.Body>
                                            <Card.Title>{item?.name}</Card.Title>
                                            <Card.Text className='d-flex price mb-1'>
                                                <span className='offer'>
                                                    ${item?.offerPrice}
                                                </span>
                                                {item?.price ? <span className='original-price ms-2'>${item?.price}</span> : null}
                                            </Card.Text>
                                            <div className='d-flex'>
                                                <span>
                                                    <StarRatings
                                                        rating={item?.star}
                                                        starRatedColor="#FEBC0B"
                                                        starDimension="25px"
                                                        starSpacing="2px"
                                                        name='rating'
                                                    />
                                                </span>
                                                <span className='ms-2 align-self-center'>
                                                    {`(${item?.review})`}
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <div className="browse-category mt-5 pt-4">
                    <div className="display-item-top">
                        <div className='display-head'>
                            <span className='head-block'></span>
                            <span className='head-name'>Categories</span>
                        </div>
                        <div className="display-bottom">
                            <div className='title-focus'>
                                Browse By Category
                            </div>
                            <div className="text-center mt-md-3">
                                <Button className='btn-change-carousel'>
                                    <i><LeftArrow /></i>
                                </Button>
                                <Button className='btn-change-carousel'>
                                    <i><RightArrow /></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Row xs={1} md={2} lg={6} className="g-4 card-container text-center">
                            {category?.map((category, index) => (
                                <Col className='box' key={index}>
                                    <Card>
                                        <Card.Body className='box-body'>
                                            <Card.Title className='text-center'>
                                                <i><category.img /></i>
                                            </Card.Title>
                                            <Card.Text className='text-center text-nowrap'>
                                                {category.name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <div className="best-selling mt-5 pt-4">
                    <div className="display-item-top">
                        <div className='display-head'>
                            <span className='head-block'></span>
                            <span className='head-name'>This Month</span>
                        </div>
                        <div className="display-bottom">
                            <span className='title-focus'>Best Selling Products</span>
                            <span><Button variant="" className='view-all'>View All</Button></span>
                        </div>
                    </div>
                    <Row xs={1} md={2} lg={4} className="g-4 card-container">
                        {bestSelling.map((item, index) => (
                            <Col key={index}>
                                <Card className='item-card h-100' onMouseEnter={() => setAddTocartHover(item?.name)} onMouseLeave={() => setAddTocartHover('')}>
                                    <Card.Img className='card-image p-5 position-relative' variant="top" src={item?.img} />
                                    <span className='d-flex flex-column position-absolute end-0 action-icon mx-2 my-2'>
                                        <i><FillHeart /></i>
                                        <i className='mt-2'><FillEye /></i>
                                    </span>
                                    {addTocartHover === item?.name ? <div className='add-to-cart-btn'>
                                        Add To Cart
                                    </div> : null}
                                    <Card.Body>
                                        <Card.Title>{item?.name}</Card.Title>
                                        <Card.Text className='d-flex price mb-1'>
                                            <span className='offer'>
                                                ${item?.offerPrice}
                                            </span>
                                            {item?.price ? <span className='original-price ms-2'>${item?.price}</span> : null}
                                        </Card.Text>
                                        <div className='d-flex'>
                                            <span>
                                                <StarRatings
                                                    rating={item?.star}
                                                    starRatedColor="#FEBC0B"
                                                    starDimension="25px"
                                                    starSpacing="2px"
                                                    name='rating'
                                                />
                                            </span>
                                            <span className='ms-2 align-self-center'>
                                                {`(${item?.review})`}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </HomeContainer >
    )
}

export default Home;

const HomeContainer = styled.div`
    .left-content{
        min-width: 18%;
        .sidebar-menu{
           .accordion{
                .accordion-item{
                    padding: 6px 0;
                    min-width: 203px;
                    /* max-width: 203px; */
                    .accordion-header{
                        button{
                            padding: 0;
                        }
                        .accordion-button:focus {
                            box-shadow: none;
                        }
                        .accordion-button:not(.collapsed) {
                            background-color: transparent;
                        }
                        .accordion-button::after{
                            transform: rotate(-90deg) !important;
                            background-size: 1rem;
                        }
                        .accordion-button:not(.collapsed)::after {
                            transform: rotate(0deg) !important
                        }
                        .accordion-button:not(.collapsed) {
                            box-shadow: none;
                        }
                    }
                    .accordion-body{
                        padding: 5px 0 0px 20px;
                        ul{
                            margin: 0;
                        }
                    }
                }
            }
            ul{
                li{
                    padding: 5px 0;
                }
            }
        }
    }
    .right-content{
        min-width: 82%;        
    }
    .browse-category{
        .card-container{
            max-width: 100vw;
            .box{
                cursor: pointer;
            }
        }
    }
    .best-selling{
        
    }
    .flash-sale{
        .carousel-container{
            .carousel-inner{
                display: flex;
            }
            .carousel-control-prev-icon{
                background-image: url('../../assets/Images/LeftArrow.svg') !important;
            }
            .carousel-control-next-icon{
                background-image: url('../../assets/Images/RightArrow.svg') !important;
            }
        }
        
    }
`