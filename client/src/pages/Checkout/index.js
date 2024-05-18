import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const handleSubmit = async (e) => {
    try {
        e.preventDefualt();
    } catch (error) {

    }
}

const CheckOut = () => {
    const [formData, setFormData] = useState({
        name: '',
        street: "",
        address: "",
        city: "",
        mobile: "",
        email: "",
        save: false,
    })

    const handleChange = (event) => {
        if (event.target.name === 'save') {
            setFormData((prev) => ({ ...prev, 'save': event.target.checked }))
        } else {
            setFormData((prev) => ({ ...prev, [event?.target?.name]: event?.target?.value }))
        }
    }

    return (
        <CheckOutContainer>
            <div className="common-space">
                <h2 className='py-5'>Billing Details</h2>
                <Row>
                    <Col>
                        <div className='form pt-3'>
                            <Form noValidate validated={false} onSubmit={(e) => handleSubmit(e)} className='w-100'>
                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.name}
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control
                                        required
                                        name="street"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.street}
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
                                    <Form.Control
                                        required
                                        name="address"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.address}
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>Town/City</Form.Label>
                                    <Form.Control
                                        required
                                        name="city"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.city}
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        required
                                        name="mobile"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.mobile}
                                        type="tel"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} sm="12" lg="10" xl="9" className='mb-3'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                        value={formData?.email}
                                        type="email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        name="save"
                                        onChange={(e) => handleChange(e)}
                                        checked={formData?.save}
                                        label="Save this information for faster check-out next time"
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className='pt-3 bill-details'>
                            <div className='item-display d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <span><img src="" alt="imag" /></span>
                                    <span>LCD Monitor</span>
                                </div>
                                <div>
                                    <span>$650</span>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <div className='border-bottom d-flex justify-content-between py-2'>
                                    <span>Subtotal:</span>
                                    <span>$1750</span>
                                </div>
                                <div className='border-bottom d-flex justify-content-between py-2'>
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className=' d-flex justify-content-between pt-2'>
                                    <span>Total:</span>
                                    <span>$1750</span>
                                </div>
                            </div>
                            <div className='payment-type d-flex flex-column mt-3'>
                                <Form.Check
                                    label="Bank"
                                    name="payment"
                                    type={'radio'}
                                    id={`inline-${'radio'}-2`}
                                />
                                <Form.Check
                                    label="Cash on delivery"
                                    name="payment"
                                    type={'radio'}
                                    id={`inline-${'radio'}-3`}
                                />
                            </div>
                            <div className="d-flex mt-4">
                                <div>
                                    <input type="text" placeholder='Coupon Code' className='px-3 py-2 coupon' />
                                </div>
                                <div>
                                    <Button className='btn-style colored ms-3 coupon'>Apply Coupon</Button>
                                </div>
                            </div>
                            <Button className='btn-style colored mt-3 px-4 coupon'>Place Order</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </CheckOutContainer>
    )
}

export default CheckOut;

const CheckOutContainer = styled.div`
    .form{
        max-width: 75%;
        .form-control{
            background-color: #F5F5F5 !important;
            box-shadow: none !important;
            &:focus{
                border-color: #d1cdcd;
            }                    
        }
        .form-check-input{
            box-shadow: none !important;
            border-color: #d1cdcd;
            width: 20px;
            height: 20px;
            &:checked,&:active{
                background-color: ${props => props.theme.colors.jesperRed};;
                border-color: ${props => props.theme.colors.jesperRed};;
            }
        }
    }
    .payment-type{
        .form-check-input:checked {
            background-color: ${props => props.theme.colors.black} !important;
            border-color: ${props => props?.theme?.colors?.black} !important;
        }
        .form-check-input:focus {
            box-shadow: none;
        }
    }
    .bill-details{
        max-width: 70%;
        .coupon{
            max-height: 42px !important;    
        }
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
    @media only screen and (max-width: 850px) {
        .form{
            max-width: 90%;
            margin: auto;
        }
        .bill-details{
            max-width: 90%;
            margin: auto;
        }
    }
    @media only screen and (max-width: 480px) {
        .form{
            max-width: 90%;
            margin: auto;
        }
        .bill-details{
            max-width: 90%;
            margin: auto;
        }
    }
`
