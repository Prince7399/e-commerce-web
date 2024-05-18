import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
    return (
        <CartContainer className='main-container mb-5'>
            <div className="common-space">
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="col" className='col-3'>
                                <div>
                                    LCD Monitor
                                </div>
                            </td>
                            <td scope="col" className='col-3'>$650</td>
                            <td scope="col" className='col-3'>
                                <input type="number" min={0} value={0} className='cart-number-input mx-auto px-2 py-1' />
                            </td>
                            <td scope="col" className='col-3'>@$650</td>
                        </tr>
                    </tbody>
                </table>
                <div className='cart-bottom'>
                    <div className='d-flex  justify-content-between'>
                        <Link to='/home' className='btn-style'>Return To Shop</Link>
                        <Link className='btn-style'>Update Cart</Link>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <div className="d-flex">
                            <div>
                                <input type="text" placeholder='Coupon Code' className='px-3 py-2' />
                            </div>
                            <div>
                                <Button className='btn-style colored ms-3'>Apply Coupon</Button>
                            </div>
                        </div>
                        <div className='bill-box'>
                            <div className=''>
                                <div>
                                    <h5>Cart Total</h5>
                                </div>
                                <div className='border-bottom d-flex justify-content-between py-2'>
                                    <span>Subtotal</span>
                                    <span>$1750</span>
                                </div>
                                <div className='border-bottom d-flex justify-content-between py-2'>
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className=' d-flex justify-content-between pt-2'>
                                    <span>Subtotal</span>
                                    <span>$1750</span>
                                </div>
                            </div>
                            <div className='text-center mt-3'>
                                <Button className='btn-style colored'>Procees to checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartContainer>
    )
}

export default Cart;

const CartContainer = styled.div`
    .table{
        .cart-number-input{
            max-width: 72px;
        }
    }
    .cart-bottom{
        .btn-style{
            border: 1px solid black;
            padding: 10px 30px;
            font-weight: 500;
            &.colored{
                background-color: ${props => props.theme.colors.jesperRed};
                color: ${props => props.theme.colors.white};
                border-color: transparent;
                border-radius: 0;
            }
        }
        .bill-box{
            min-width: 400px;
            max-width: 450px;
            padding: 20px;
            border: 1px solid ${(prop) => prop.theme.colors.black};
            .border-bottom{
                border-width: 2px !important;
            }
        }
    }
`
