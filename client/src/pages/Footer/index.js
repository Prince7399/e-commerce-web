import React from 'react'
import { ReactComponent as FacebookIcon } from '../../assets/Images/IconFacebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/Images/IconTwitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/Images/IconInstagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/Images/IconLinkedin.svg';
import { ReactComponent as SendIcon } from '../../assets/Images/IconSend.svg';
import QrCode from "../../assets/Images/Qrcode.png"
import GooglePlay from "../../assets/Images/googlePlay.png"
import AppStore from "../../assets/Images/appStore.png"

const Footer = () => {
    return (
        <div className='main-container footer'>
            <div className="common-space d-flex flex-column flex-lg-row box-space justify-content-between">
                <div className='d-flex flex-column flex-md-row justify-content-between box-space'>
                    <div className='box'>
                        <p>Exclusive</p>
                        <p>Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <div className='email-contact'>
                            <input type="email" placeholder='Enteryour email' className='px-3 py-2' />
                            <i><SendIcon /></i>
                        </div>
                    </div>
                    <div className='box'>
                        <p>Support</p>
                        <p>123, ABC Ahemedabad, GU, India</p>
                        <p>exclusive@gmail.com</p>
                        <p>+91 9134567820</p>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-between box-space'>
                    <div className='box'>
                        <p>Account</p>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className='box'>
                        <p>Quick Link</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='contact-info box-space box'>
                    <p>Download App</p>
                    <p className='save-info'>Save $3 with App New User Only</p>
                    <div className="d-flex">
                        <div><img src={QrCode} alt="" /></div>
                        <div className='ms-2 d-flex flex-column gap-2'>
                            <img src={GooglePlay} alt="" height={35} />
                            <img src={AppStore} alt="" height={35} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <i><FacebookIcon /></i>
                        <i><TwitterIcon /></i>
                        <i><InstagramIcon /></i>
                        <i><LinkedinIcon /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
