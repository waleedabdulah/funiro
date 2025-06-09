import './Header.scss'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/header/Logo.svg'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsPersonExclamation } from "react-icons/bs";
import { useState } from 'react';
import { BsBagX } from "react-icons/bs";
import item01 from '../../assets/home/ProductCard01.png'
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Header(){
    const [ hasCartModalOpen , setHasCartModalOpen ] = useState(false);

    return (
        <div className="header-container">
           <div className="logo">
                <img src={Logo} alt='Logo' />
                <h2>Funiro</h2>
           </div>

           <div className="navbar-item">
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
           </div>

           <div className="icons">
                <BsPersonExclamation />
                <CiSearch />
                <CiHeart />
                <BsCart3 onClick={() => setHasCartModalOpen(!hasCartModalOpen)}/>
           </div> 

           {hasCartModalOpen &&
           <div className='cart-overlay'>
                <div className='cart'>
                    <div className='cart-section'>
                        <span>
                            <span>Shopping Cart</span> 
                            <BsBagX onClick={() => setHasCartModalOpen(!hasCartModalOpen)}/> 
                        </span>
                        
                        <hr 
                            style={{
                                height: '1px',
                                margin : '1rem 0rem' ,
                                backgroundColor: '#9F9F9F',
                                border: 'none',
                                width: '80%',
                            }}
                        />
                    
                        <div className='items_container'>
                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>

                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>

                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>



                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>



                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>



                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>


                            <div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div><div className='item'>
                                <div className='product_img'>
                                    <img src={item01} />
                                </div>

                                <div className='item_info'>
                                    <span>{'Asgaard sofa'}</span>
                                    <span>1 x <b>{'Rs. 250,000.00'}</b></span>
                                </div>
                                <div className='close'>
                                    <IoCloseCircleSharp color='#9F9F9F' />
                                </div>
                            </div>  
                        </div>
                        
                        <div className='total'>
                            <span>Subtotal</span>
                            <span>{'Rs. 250,000.00'}</span>
                        </div>
                    </div>
                    
                    <hr 
                        style={{
                            height: '1px',
                            backgroundColor: '#9F9F9F',
                            border: 'none',
                        }}
                    />

                    <div className='btns'>
                        <button>Cart</button>
                        <button>Checkout</button>
                        <button>Comparison</button>
                    </div>
                            
                </div>
           </div>
                
           }
        </div>
    )
}