import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer(){

    return (
        <footer className='footer-container'>
            <div className='app-info'>
                <div className='address-info'>
                    <span>Funiro.</span>
                    
                    <div className='address'>
                        <p>
                            400 University Drive Suite 200 Coral Gables,
                        </p>
                        <p>FL 33134 USA</p>
                    </div>
                </div>

                <div className='links-help'>
                    <div className='links-section'>
                        <span>Links</span>
                        <nav>
                            <NavLink to="/" end>Home</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav> 
                    </div>
                    <div className='help-section'>
                        <span>Help</span>
                        <nav>
                            <NavLink to="/" >Payment Options</NavLink>
                            <NavLink to="/return">Returns</NavLink>
                            <NavLink to="/privacy-policies">Privacy Policies</NavLink>
                        </nav>
                    </div>
                </div>

                <div className='newsletter'>
                    <span>Newsletter</span>

                    <form className='subscribe'>
                        <input 
                            type='email'
                            placeholder='Enter Your Email Address'
                        />
                        <button type='submit'>SUBSCRIBE</button>
                    </form>
                        
                </div>
            </div>

            <div className='reserve-rights'>
                <span>2023 furino. All rights reverved</span>
            </div>
            
        </footer>
    )
}