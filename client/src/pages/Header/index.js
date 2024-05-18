import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/Images/Search.svg';
import { ReactComponent as WishlistIcon } from '../../assets/Images/Wishlist.svg';
import { ReactComponent as CartIcon } from '../../assets/Images/Cart.svg';
import { ReactComponent as UserIcon } from '../../assets/Images/user.svg';
import { ReactComponent as OrderIcon } from '../../assets/Images/mallbag.svg';
import { ReactComponent as CancelIcon } from '../../assets/Images/cancel.svg';
import { ReactComponent as ReviewIcon } from '../../assets/Images/Reviews.svg';
import { ReactComponent as LogoutIcon } from '../../assets/Images/logout.svg';

const Header = () => {
    let location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname.slice(1) || 'home');

    return (
        <div className='main-container header border-bottom'>
            <div className="header-top common-space py-2 text-center">
                <div className='text-white'>
                    <p className='m-0 d-inline-block'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link className='text-white d-inline-block text-decoration-underline ms-2'>ShopNow</Link>
                </div>
            </div>
            <div className="header-bottom common-space">
                <div className='d-flex justify-content-between flex-column flex-md-row'>
                    <div className='exclusive align-self-center'>Exclusive</div>
                    <div className='align-self-center'>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light py-md-0">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item px-md-3">
                                            <Link to='/home' className={`nav-link p-0 ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>Home</Link>
                                        </li>
                                        <li class="nav-item px-md-3">
                                            <Link to='/contact' className={`nav-link p-0 ${activePage === 'contact' ? 'active' : ''}`} onClick={() => setActivePage('contact')}>Contact</Link>
                                        </li>
                                        <li class="nav-item px-md-3">
                                            <Link to='/about' className={`nav-link p-0 ${activePage === 'about' ? 'active' : ''}`} onClick={() => setActivePage('about')}>About</Link>
                                        </li>
                                        <li class="nav-item px-md-3">
                                            <Link to='/signup' className={`nav-link p-0 ${activePage === 'signup' ? 'active' : ''}`} onClick={() => setActivePage('signup')}>Signup</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='actions d-flex flex-column flex-md-row'>
                        <div className='search-container px-3 px-md-0'>
                            <input type="search" placeholder='What are you looking for?' className='px-4 py-2 border-0 search' />
                            <i className='search-icon'><SearchIcon /></i>
                        </div>
                        <div className='d-flex ms-3 action-icons justify-content-between'>
                            <div>
                                <i><WishlistIcon /></i>
                            </div>
                            <div>
                                <i><CartIcon /></i>
                            </div>
                            <div className='user-dropdown'>
                                <div className="btn-group">
                                    <button type="button" className="btn p-0 user-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i><UserIcon style={{ stroke: 'white' }} /></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end bg-dark">
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                <div className='d-flex'>
                                                    <UserIcon />
                                                    <span className='dropdown-list-name'>Manage My Account</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                <div className='d-flex'>
                                                    <OrderIcon />
                                                    <span className='dropdown-list-name'>My Order</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                <div className='d-flex'>
                                                    <CancelIcon />
                                                    <span className='dropdown-list-name'>My Cancellations</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                <div className='d-flex'>
                                                    <ReviewIcon />
                                                    <span className='dropdown-list-name'>My Reviews</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                <div className='d-flex'>
                                                    <LogoutIcon />
                                                    <span className='dropdown-list-name'>Logout</span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
