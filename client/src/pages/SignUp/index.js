import React from 'react'
import styled from 'styled-components';
import sideImage from "../../assets/Images/Login/SideImage.png"
import { ReactComponent as Google } from "../../assets/Images/Login/Google.svg"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <SignUpContainer className='main-container my-5'>
            <div className='container-inner flex-column flex-lg-row'>
                <div className="image-div">
                    <img src={sideImage} alt="" />
                </div>
                <div className="details-container d-flex justify-align-center justify-content-center mx-auto my-auto">
                    <div className="detail-list">
                        <div className='mb-5'>
                            <h3 className='heading my-1'>Create an account</h3>
                            <p className='instruction mt-3'>Enter your details below</p>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-4">
                                <input type="text" className="form-control input-field" placeholder='Name' />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control input-field" placeholder='Email' />
                            </div>
                            <div className="mb-4">
                                <input type="password" className="form-control input-field" placeholder='Password' />
                            </div>
                            <div>
                                <Button variant="danger" type="submit" className='submit-button'>Danger</Button>
                                <Button variant="light" type="submit" className='submit-button google-signup mt-3'>
                                    <span>
                                        <i><Google /></i>
                                    </span>
                                    <span className='ms-2'>
                                        Sign up with Google
                                    </span>
                                </Button>
                            </div>
                            <div className='mt-3 d-flex justify-content-center'>
                                <span>
                                    Already have an account?
                                </span>
                                <span className='ms-2 d-flex flex-column'>
                                    <Link to='/login'>Log in</Link>
                                    <div className='login-underline'></div>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SignUpContainer>
    )
}

export default SignUp

const SignUpContainer = styled.div`
    .container-inner{
        display: flex;
        flex: 0 0 50%;

        .details-container{
            width: 370px;
            .detail-list{
                .heading{
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 30px;
                    letter-spacing: 0.04em;
                    text-align: left;
                }
                .instruction{
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    letter-spacing: 0em;
                    text-align: left;
                }

                .input-field{
                    border: none;
                    border-radius: 0;
                    border-bottom: 1px solid ${props => props.theme.colors.black};
                    padding-left: 0;
                    box-shadow: none !important;
                }
                .submit-button{
                    width: 100%;
                    border-radius: 4px;
                    margin-top: 5px;
                    border: 1px solid solid transparent;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    &.google-signup{
                        border: 1px solid ${props => props.theme.colors.black};
                        align-items: center;
                        span{
                            svg{
                                width: 22px;
                                height: 22px;
                            }
                        }
                    }
                }
                .login-underline{
                    width: 44px;
                    height: 2px;
                    background-color: ${props => props.theme.colors.black};
                }
            }
        }
    }
`
