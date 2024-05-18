import React, { useState } from 'react'
import styled from 'styled-components';
import { Card, Col, Row, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { ReactComponent as FillEye } from '../../assets/Images/FillEye.svg';
import { ReactComponent as Delete } from '../../assets/Images/Delete.svg';
import { ReactComponent as Cart } from '../../assets/Images/CartWhite.svg';
import NoarthCoat from '../../assets/Images/Items/north_coat.png';
import DuffleBag from '../../assets/Images/Items/duffle_bag.png';
import Cooler from '../../assets/Images/Items/cpu_cooler.png';
import BookSelf from '../../assets/Images/Items/bookself.png';
import GamePadBlack from '../../assets/Images/Items/gamepad_black.png';
import Jacket from '../../assets/Images/Items/jacket.png';

import GamePad from '../../assets/Images/Items/gamepad.png';
import KeyBoard from '../../assets/Images/Items/keyboard.png';
import Monitor from '../../assets/Images/Items/monitor.png';
import Laptop from '../../assets/Images/Items/laptop.png';

const WishList = () => {
    const [addTocartHover, setAddTocartHover] = useState('null');

    const watshlistItems = [
        {
            name: 'Gucci Duffle Bag',
            img: DuffleBag,
            offerPrice: 960,
            price: 1160,
            star: 4.5,
            review: 65,
            discount: 35
        },
        {
            name: 'RGB liquid CPU Cooler',
            img: Cooler,
            offerPrice: 1960,
            price: null,
            star: 4.5,
            review: 65
        }, {
            name: 'GP11 Shooter USB Gamepad',
            img: GamePadBlack,
            offerPrice: 550,
            price: null,
            star: 5,
            review: 65
        },
        {
            name: 'Quilted Satin Jacket',
            img: Jacket,
            offerPrice: 750,
            price: null,
            star: 5,
            review: 65
        }]

    const suggestionItems = [
        {
            name: 'ASUS FHD Gaming Laptop',
            img: Laptop,
            offerPrice: 960,
            price: 1160,
            star: 4.5,
            review: 65,
            discount: 35
        },
        {
            name: 'IPS LCD Gaming Monitor',
            img: Monitor,
            offerPrice: 1960,
            price: null,
            star: 4.5,
            review: 65
        }, {
            name: 'HAVIT HV-G92 Gamepad',
            img: GamePad,
            offerPrice: 550,
            price: null,
            star: 5,
            review: 65,
            arrival: 'new'
        },
        {
            name: 'AK-900 Wired Keyboard',
            img: KeyBoard,
            offerPrice: 750,
            price: null,
            star: 5,
            review: 65
        }]

    return (
        <WishListContainer className='main-container mb-5'>
            <div className="common-space">
                <div className="just-for-you mt-5 pt-4">
                    <div className="display-item-top">
                        <div className="display-bottom  align-item-center">
                            <span className='title-wishlist align-self-center'>Wishlist ({suggestionItems?.length})</span>
                            <span><Button variant="" className='view-all right-btn'>Move All to Bag</Button></span>
                        </div>
                    </div>
                    <Row xs={1} md={2} lg={4} className="g-4 card-container mt-1">
                        {watshlistItems.map((item, index) => (
                            <Col key={index}>
                                <Card className='item-card h-100' onMouseEnter={() => setAddTocartHover(item?.name)} onMouseLeave={() => setAddTocartHover('')}>
                                    <Card.Img className='card-image p-5 position-relative' variant="top" src={item?.img} />
                                    <span className='d-flex flex-column position-absolute end-0 action-icon mx-2 my-2'>
                                        <i className='mt-1'><Delete /></i>
                                    </span>
                                    {item?.discount ? <span className='discount position-absolute start-0 m-2'>
                                        -{item.discount}%
                                    </span> : null}
                                    {addTocartHover === item?.name ? <div className='add-to-cart-btn'>
                                        <span>
                                            <i><Cart /></i>
                                        </span>
                                        <span className='ms-2'>
                                            Add To Cart
                                        </span>
                                    </div> : null}
                                    <Card.Body>
                                        <Card.Title>{item?.name}</Card.Title>
                                        <Card.Text className='d-flex price mb-1'>
                                            <span className='offer'>
                                                ${item?.offerPrice}
                                            </span>
                                            {item?.price ? <span className='original-price ms-2'>${item?.price}</span> : null}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="best-selling mt-5 py-4">
                    <div className="display-item-top">
                        <div className='display-head'>
                            <span className='head-block'></span>
                            <span className='head-name'>Just For You</span>
                            <div className="display-bottom ms-auto">
                                <span><Button variant="" className='view-all right-btn'>See All</Button></span>
                            </div>
                        </div>
                    </div>
                    <Row xs={1} md={2} lg={4} className="g-4 card-container mt-2">
                        {suggestionItems.map((item, index) => (
                            <Col key={index}>
                                <Card className='item-card h-100' onMouseEnter={() => setAddTocartHover(item?.name)} onMouseLeave={() => setAddTocartHover('')}>
                                    <Card.Img className='card-image p-5 position-relative' variant="top" src={item?.img} />
                                    <span className='d-flex flex-column position-absolute end-0 action-icon mx-2 my-2'>
                                        <i className='mt-1'><FillEye /></i>
                                    </span>
                                    {item.discount ? <span className='discount position-absolute start-0 m-2'>
                                        -{item.discount}%
                                    </span> : null}
                                    {item?.arrival ? <span className='discount position-absolute start-0 m-2' style={{ background: '#00FF66' }}>
                                        {item.arrival}
                                    </span> : null}
                                    {addTocartHover === item?.name ? <div className='add-to-cart-btn'>
                                        <span>
                                            <i><Cart /></i>
                                        </span>
                                        <span className='ms-2'>
                                            Add To Cart
                                        </span>
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
        </WishListContainer >
    )
}

export default WishList;

const WishListContainer = styled.div`
    .display-item-top{
        .title-wishlist{
            font-size: 20px;
        }
        .right-btn{
            background-color: transparent;
            border: 1px solid black;
            color: black;
        }
    }
`
