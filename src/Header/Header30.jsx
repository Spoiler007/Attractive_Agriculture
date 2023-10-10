import React from 'react'
import {Link}  from 'react-router-dom';
import { useRef } from 'react'
import { FaBars, FaTimes ,FaShoppingCart,FaStoreAlt} from 'react-icons/fa'
import './header30.css'
import Login from '../Form/Login';
import { useAuth0 } from "@auth0/auth0-react";
import Addtocart from '../Cart/Store'
import { Routes,Route } from 'react-router-dom';
const Header30 = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <>
       

            <header className='header-3'>
                <nav className='nav' ref={navRef}>
                    <a href="#home">Home</a>
                    <a href="#category">Category</a>
                    <a href="#product">Product</a>
                    <a href="#deal">Deal</a>
                    <a href="#contact">Contact</a>

                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <FaTimes />
                    </button>

                </nav>
                <div className="icons">

                    <FaShoppingCart className='cart'  />

                    <Link to={"/cart"}>
                    <FaStoreAlt className='store'/>
                    </Link>

                    <div className='dropdown'>
                        <a className="fas fa-user-circle"></a>
                        <div className='dropdown-content'>
                            <p>Profile</p>
                            <p>WishList</p>
                            <p>cart</p>

                            {isAuthenticated ? (
                                <li >
                                    <button className='log-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                </li>

                            ) : (


                                <li>
                                    <button className='log-btn' onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            )}
                        </div>

                    </div>


                </div>
                <button className='nav-btn' onClick={showNavBar}>
                    <FaBars />
                </button>

            </header>

        </>
    )
}

export default Header30;

// auth0
// dev-uxwwufmsugasju6o