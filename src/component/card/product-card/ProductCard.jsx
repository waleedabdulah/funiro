import './ProductCard.scss';
import { useState, useEffect , useRef } from 'react';
import { CgShare } from "react-icons/cg";
import { TbArrowsLeftRight } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

export default function ProductCard({item_info}){
    const {imgSrc , productName, productType , productPrice , discountPercentage = 0, isNewProduct = false } = item_info ;
    let discountPrice = productPrice - (productPrice * discountPercentage / 100);
    
    const overlayRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const overlay = overlayRef.current; // Get the current overlay element

        if (!overlay) return; // Guard clause in case the element is not found

        // Define the event handlers
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Add the event listeners
        overlay.addEventListener('mouseenter', handleMouseEnter);
        overlay.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup the event listeners on component unmount
        return () => {
            overlay.removeEventListener('mouseenter', handleMouseEnter);
            overlay.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []); // Empty dependency array to run the effect once on mount

    return (
        <div className="card-container">
            
            <div className='overlay' ref={overlayRef}>
                {isHovered &&
                    <div className='overlay-content' >
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <div className="actions">
                            <span>
                                <CgShare />
                                <p>Share</p>
                            </span>
                            <span>
                                <TbArrowsLeftRight />
                                <p>Compare</p>
                            </span>
                            <span>
                                <CiHeart />
                                <p>Like</p>
                            </span>
                        </div> 
                    </div>
                }

                <div className="img-container">
                    <img src={imgSrc} alt={imgSrc} />
                    <div className='tag-container'>
                        {discountPercentage > 0 && <div className='discount-tag'>-{discountPercentage}%</div>}
                        {isNewProduct && <div className='new-product-tag'>New</div>}
                    </div>
                </div>

                <div className="card-info-container">
                    <span className="product-name">{productName}</span>
                    <span className="product-type">{productType}</span>
                    <div className='price-container'>
                        <span className="discount-percentage">Rp{' '+ discountPrice + '.000'}</span>
                        {discountPercentage > 0 && <span className="product-price">Rp{' '+ productPrice + '.000'}</span>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}