import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { ReactComponent as EmailIcon } from '../../assets/Images/email.svg';
import { ReactComponent as ContactIcon } from '../../assets/Images/contact.svg';
import { tileCase, validateEmail } from '../../Utils';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    })

    const [error, setErrors] = useState({
        name: '',
        email: '',
        number: '',
    })

    const isValidate = () => {
        let errors = { ...error };
        if (!formData?.name?.length) errors['name'] = 'Please Enter Name';
        if (!formData?.name?.length) errors['email'] = 'Please Enter Email';
        if (!formData?.name?.length) errors['number'] = 'Please Enter Number';
        setErrors(errors)
        let totalError = Object.values(errors)?.filter(value => value?.length);
        return totalError?.length;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isValidate()) {

            }
        } catch (error) {

        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }

    const handleBlur = (e) => {
        setErrors((prev) => ({ ...prev, [e.target.name]: e.target.value?.length ? '' : `Please Enter ${tileCase(e.target.name)}` }))
        if (e.target.name === 'email') {
            if (!validateEmail(e.target.value)) setErrors((prev) => ({ ...prev, email: 'Please Enter Valid Email' }))
        }
    }

    return (
        <ContactContainer>
            <div className="common-space my-5">
                <Row>
                    <Col xs={11} md={6} lg={3} className='mx-xs-auto me-lg-auto contact-info'>
                        <div className='mb-4'>
                            <div className='d-flex align-items-center'>
                                <span className='contact-icon'>
                                    <i><ContactIcon /></i>
                                </span>
                                <h5 className='ms-3'>Call To Us</h5>
                            </div>
                            <div className='mt-3'>
                                <div className='info'>We are available 24/7, 7 days a week.</div>
                                <div className='info'>Phone: +91 9876543210</div>
                            </div>
                        </div>
                        <div className='border'></div>
                        <div className='mt-4'>
                            <div className='d-flex align-items-center'>
                                <span className='contact-icon'>
                                    <i><EmailIcon /></i>
                                </span>
                                <h5 className='ms-3'>Write To Us</h5>
                            </div>
                            <div className='mt-3'>
                                <div className='info'>Fill out our form and we will contact you within 24 hours.</div>
                                <div className='info'>Emails: customer@exclusive.com</div>
                                <div className='info'>Emails: support@exclusive.com</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={11} md={6} lg={8} className='mx-auto ms-lg-auto my-auto'>
                        <Form noValidate validated={false} onSubmit={(e) => handleSubmit(e)} className='w-100 form'>
                            <Row>
                                <Form.Group as={Col} sm="12" lg="4" className='mb-3'>
                                    <Form.Control
                                        required
                                        name="name"
                                        placeholder='Your Name'
                                        onChange={(e) => handleChange(e)}
                                        onBlur={(e) => handleBlur(e)}
                                        value={formData?.name}
                                        type="text"
                                        className={error?.name?.length ? 'invalid-input' : null}
                                    />
                                    {error?.name?.length ? <Form.Control.Feedback type="invalid">
                                        {error?.name}
                                    </Form.Control.Feedback> : null}
                                    {/* <div className="invalid-feedback">Please Enter name</div> */}
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="4" className='mb-3'>
                                    <Form.Control
                                        required
                                        name="email"
                                        placeholder='Your Email'
                                        onChange={(e) => handleChange(e)}
                                        onBlur={(e) => handleBlur(e)}
                                        value={formData?.email}
                                        type="email"
                                        className={error?.email?.length ? 'invalid-input' : null}
                                    />
                                    {error?.email ? <Form.Control.Feedback type="invalid">
                                        {error?.email}
                                    </Form.Control.Feedback> : null}
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="4" className='mb-3'>
                                    <Form.Control
                                        required
                                        name="number"
                                        placeholder='Your Phone'
                                        onChange={(e) => handleChange(e)}
                                        onBlur={(e) => handleBlur(e)}
                                        value={formData?.number}
                                        type="tel"
                                        className={error?.number?.length ? 'invalid-input' : null}
                                    />
                                    {error?.number ? <Form.Control.Feedback type="invalid">
                                        {error?.number}
                                    </Form.Control.Feedback> : null}
                                </Form.Group>
                            </Row>

                            <Form.Control
                                required
                                as="textarea"
                                placeholder="Your Massage"
                                name="message"
                                value={formData?.message}
                                onChange={(e) => handleChange(e)}
                                style={{ height: '175px' }}
                            />
                            <div className='form-submit'>
                                <Button type='submit' className='btn-style colored mt-3 px-4 coupon'>Send Message</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </ContactContainer>
    )
}

export default Contact

const ContactContainer = styled.div`
    .contact-icon{
        background-color: ${props => props.theme.colors.jesperRed};
        border-radius: 50%;
        height: 42px !important;
        width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            padding: 4px 8px;
            align-self: center;
            svg{
                height: 23px !important;
                max-width: 20px;
            }
        }
    }
    .contact-info{
        .info{
            line-height: 35px;
            font-weight: 500;
        }
    }    
    .form{
        .invalid-feedback{
            display: block !important;
        }
        .invalid-input{
            border-color: red;
            padding-right: calc(1.5em + .75rem);
            background-image: url(url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"));
            background-repeat: no-repeat;
            background-position: right calc(.375em + .1875rem) center;
            background-size: calc(.75em + .375rem) calc(.75em + .375rem);
        }
        .form-control{
            background-color: #F5F5F5 !important;
            box-shadow: none !important;
            &:focus{
                border-color: #d1cdcd;
            }               
        }
        .form-submit{
            text-align: end;
            .btn-style{
                border: 1px solid black;
                padding: 8px 20px;
                font-weight: 500;
                &.colored{
                    background-color: ${props => props.theme.colors.jesperRed};
                    color: ${props => props.theme.colors.white};
                    border-color: transparent;
                    border-radius: 0;
                }
            }
        }
        textarea{
            vertical-align: top !important;
        }
    }
`
