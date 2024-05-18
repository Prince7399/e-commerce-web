import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        max-width: 1519px;
    }
    body{
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.black};
    }
    .main-container{
        width: 100vw;
    }

    .header{
        .header-top{
            background-color: ${props => props.theme.colors.black};
        }
        .header-bottom{
            .exclusive{
                font-size: 24px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0.03em;
                text-align: left;
            }
            padding-top: 30px;
            padding-bottom: 15px;
            .navbar-nav{
                .active{
                    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
                }
            }
            .actions{
                .search-container{
                    position: relative;
                    min-width: 210px;
                    .search{
                        width: 100%;
                        background-color: ${props => props.theme.colors.secondary};
                        font-size: 12px;
                        border-radius: 4px;
                    }
                    .search-icon{
                        position: absolute;
                        top: 2px;
                        right: 5px;
                        width:16px;
                        height:16px;
                    }                    
                }
                .action-icons{
                    align-self: center;
                    gap: 16px;
                    i{
                        svg{
                            width: 28px;
                            height: 28px;
                        }
                    }
                    .user-dropdown{
                        .user-btn{
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            background-color: red;
                            border-color: transparent !important;
                            svg {
                                width: 25px;
                                height: 25px;
                                vertical-align: sub;
                                padding: 1px;
                                path{
                                    stroke: white !important;
                                }
                            }
                        }
                        .dropdown-menu{
                            background: rgb(114,55,172);
                            background: linear-gradient(41deg, rgba(114,55,172,1) 0%, rgba(113,96,124,0.9724264705882353) 14%, rgba(0,7,9,1) 100%);
                            /* background-image: linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% ); */
                            svg{
                                width: 24px;
                                height: 24px;
                                path{
                                    stroke: white !important;
                                }
                            }
                            .dropdown-list-name{
                                color: white;
                            }
                            .dropdown-item{
                                div{
                                    gap: 10px;
                                }
                                &:hover{
                                    background: rgb(255, 255, 255,0.3);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .footer{
        background: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
        .common-space{
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .email-contact{
            position: relative;
            input{
                border-radius: 4px;
                background-color: transparent;
                border-color: white;
            }
            i{
                position: absolute;
                right: 5px;
                top: 6px;
            }
        }
        .contact-info{
            max-width: 198px;
            .save-info{
                font-size: 13px;
            }
        }
    }

    .common-space{
        padding-left: 100px;
        padding-right: 100px;
    }

    .display-item-top{
        margin-bottom: 20px;
        .display-head{
            display: flex;
            .head-name{
                color: ${props => props.theme.colors.jesperRed};
                font-weight: 600;
                align-self: center;
                margin-left: 13px;
            }
            .head-block{
                width: 20px;
                height: 40px;
                border-radius: 4px;
                background-color: ${props => props.theme.colors.jesperRed};
            }
        }
        .display-bottom{
            display: flex;
            justify-content: space-between;
            
            .title-focus{
                font-size: 32px;
                font-weight: 600;
            }

            .view-all{
                background-color: ${props => props.theme.colors.jesperRed};
                color: ${props => props.theme.colors.white};
                border-radius: 4px;
                padding: 7px 35px;
            }
            .btn-change-carousel{
                background-color: transparent;
                padding: 0;
                border: none;
                cursor: pointer !important;
            }
        }
    }

    .item-card{
        .action-icon{
            i{
                cursor: pointer;
            }
        }
        .card-image{
            background: ${props => props.theme.colors.secondary};
        }
        .discount{
            background-color: ${props => props.theme.colors.jesperRed};
            color: ${props => props.theme.colors.white};
            padding: 3px 10px;
            border-radius: 4px;
            font-size: 12px;
        }
        .add-to-cart-btn{
            background-color: ${props => props.theme.colors.black};
            color: ${props => props.theme.colors.white};
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            padding: 10px 0;
            cursor: pointer;
            width: 100%;
            position: absolute;
            top: 61%;
            z-index: 99;
        }
        .price{
            font-weight: 500;
            font-size: 16px;
            .offer{
                color: ${props => props.theme.colors.jesperRed};
            }
            .original-price{
                text-decoration: line-through;
                color: ${props => props.theme.colors.black};
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .common-space {
            padding: 0px;
        }
        .header-bottom{
            .navbar{
                width: 100%;
                .navbar-toggler{
                    margin: auto;
                }
                .navbar-collapse{
                    margin-top: 10px;
                    width: 50vw;
                    .navbar-nav{
                        text-align: center;
                    }
                }
            }
            .actions{
                .search-container{
                    width: 75%;
                    margin: auto;
                    margin-bottom: 5px;
                    .search-icon{
                        right: 23px !important;
                        top: 3px !important;
                    }    
                }
            }
        }
        .footer{
            .box-space{
                margin-left:15px;
            } 
            .box{
                margin-top: 30px;
            }
            .email-contact{
                width: 75%;
            }
        }
    }

    @media only screen and (min-width: 601px) {
        .footer{
            .box-space{
                gap: 100px;
            }     
        }
    }

    @media only screen and (max-width: 320px) {
        .common-space {
            max-width: 320px;
            overflow-x: hidden;
        }
        .card-container{
            margin-left: auto;
            margin-right: auto;
        }
        .display-item-top {
            padding-left: 5px;
            padding-right: 5px;
            .display-head {
                .head-name {
                    font-weight: 600;
                    align-self: center;
                    margin-left: 13px;
                }
            }
            .display-bottom {
                .title-focus {
                    font-size: 18px;
                }

                .view-all {
                    padding: 7px 20px;
                }
                .btn-change-carousel{
                    height: 15px;
                    width: 15px;
                }
            }
        }

        .display-item-top{
            .display-head{
                .head-name{
                    align-self: center;
                    margin-left: 10px;
                }
                .head-block{ 
                    width: 13px;
                    height: 40px;
                }
            }
            .display-bottom{
                .title-focus{
                    font-size: 18px;
                    display: inline-block;
                }

                .view-all{
                    padding: 2px 10px;
                }
                .btn-change-carousel{
                    height: 32px;
                    width: 32px;
                    padding: 0;
                    svg{
                        height: 30px;
                        width: 30px;
                    }
                }
            }
        }
    }
`
export default GlobalStyle;