import Banner from "../banner/Banner";
import './Cart.scss' ;
import { AiFillDelete } from "react-icons/ai";
import ProductImg from '../../assets/single-product/item04.png';
import Slider from "../slider/Slider";

export default function Cart(){

    return (
        <section>
            <Banner  
                title='Cart' 
                hasToShowLogo={true} 
                currentPage='Cart' 
            />

            <div className="cart_container">
                <div className="cart_item_list">
                        <div className="header">
                            <span></span>
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>
                        </div>

                        <div className="no_of_items">
                            
                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20} /></span>
                            </div>


                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20} /></span>
                            </div>


                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20} /></span>
                            </div>


                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20} /></span>
                            </div>


                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20}/></span>
                            </div>


                            <div className="item">
                                <span>
                                    <img src={ProductImg} />
                                </span>
                                <span>Asgard sofa</span>
                                <span>Rs. 250,000.00</span>
                                <span>
                                    <input 
                                        type="number" 
                                        // value={1}
                                    />
                                </span>
                                <span>Rs. 250,000.00</span>
                                <span><AiFillDelete color="#B88E2F" size={20} /></span>
                            </div> 


                        </div>
                </div>

                <div className="checkout_card">
                    <span>Cart Totals</span>
                    <div className="prices">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span>Rs.  250,000.00</span>
                        </div>

                        <div className="total">
                            <span>Total</span>
                            <span>Rs.  250,000.00</span>
                        </div>
                    </div>
                    <button>
                        Check Out
                    </button>
                </div>

            </div>

            <Slider />
        </section>
    )
}