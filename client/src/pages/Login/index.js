import React from 'react'
import styled from 'styled-components';
import sideImage from "../../assets/Images/Login/SideImage.png"
import { ReactComponent as Google } from "../../assets/Images/Login/Google.svg"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <LoginContainer className='main-container my-5'>
            <div className='container-inner flex-column flex-lg-row'>
                <div className="image-div">
                    <img src={sideImage} alt="" />
                </div>
                <div className="details-container d-flex justify-align-center justify-content-center mx-auto my-auto">
                    <div className="detail-list">
                        <div className='mb-5'>
                            <h3 className='heading my-1'>Log in to Exclusive</h3>
                            <p className='instruction mt-3'>Enter your details below</p>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-4">
                                <input type="email" className="form-control input-field" placeholder='Email' />
                            </div>
                            <div className="mb-4">
                                <input type="password" className="form-control input-field" placeholder='Password' />
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <Button variant="danger" type="submit" className='submit-button'>Login</Button>
                                <Link to='/login' className='forgot-link'>Forgot Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
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
                    width: 140px;
                    border-radius: 4px;
                    margin-top: 5px;
                    border: 1px solid solid transparent;
                    padding-top: 12px;
                    padding-bottom: 12px;
                }
                .forgot-link{
                    color: ${props => props.theme.colors.jesperRed};
                }
            }
        }
    }
`
