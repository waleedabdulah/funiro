import React , {useState} from "react";
import './ProductInfo.scss';
import { GoStar } from "react-icons/go";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function ProductInfo({productInfo}){
    const { product_id , imgSrc , productName, productType , productPrice , discountPercentage = 0, isNewProduct = false } = productInfo ;
    let discountPrice = productPrice - (productPrice * discountPercentage / 100);
    
    const [ activeSize , setActiveSize ] = useState('L');
    const [ activeColor , setActiveColor ] = useState(1);
    return (
        <div className="product_info_container">
            <div className="product-images">
                <img src={imgSrc} />
            </div>
            <div className="info">
                <span>{productName}</span>
                <span>Rs. {discountPrice}.000</span>
                <span  className="reviews">
                    <span><GoStar /> <GoStar color="gold" /> <GoStar /> <GoStar /> <GoStar /></span>
                    <span> | 5 Customer Review</span>
                </span>
                <p>
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
                <div className="sizes">
                    <p>Size</p>
                    <div className="different-sizes">
                        <span className={`${ activeSize === 'L' && 'active'}`} onClick={() => setActiveSize('L')}>L</span>
                        <span className={`${ activeSize === 'XL' && 'active'}`} onClick={() => setActiveSize('XL')}>XL</span>
                        <span className={`${ activeSize === 'XS' && 'active'}`} onClick={() => setActiveSize('XS')}>XS</span>
                    </div>
                </div>
                <div className="colors">
                    <p>Color</p>
                    <div className="different-colors">
                        <span className={`${ activeColor === 1 && 'active'}`} onClick={() => setActiveColor(1)}></span>
                        <span className={`${ activeColor === 2 && 'active'}`} onClick={() => setActiveColor(2)}></span>
                        <span className={`${ activeColor === 3 && 'active'}`} onClick={() => setActiveColor(3)}></span>
                    </div>
                </div>

                <div className="add_to_cart">
                    <div className="count">
                        <span>-</span>
                        <span>{1}</span>
                        <span>+</span>
                    </div>

                    <div className="cart">
                        <button>
                            Add To Cart
                        </button>
                        <button>
                            + Compare
                        </button>
                    </div>    
                </div>
                
                <hr style={{ height: '1px', backgroundColor: '#9F9F9F', border: 'none' }} />

                <div className="category_and_tags_info">
                    <pre> SKU      :  SS001</pre>
                    <pre> Category :  Sofas</pre>
                    <pre> Tags     :  Sofa, Chair, Home, Shop </pre>
                    <pre> Share    :  <FaFacebook color="black" size={15}/>  <IoLogoLinkedin size={15} color="black" />  <AiFillTwitterCircle size={16} color="black" /> </pre>
                </div>
            </div>
        </div>
    )
} 