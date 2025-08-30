import './ProductCard.scss';
import { useState, useEffect , useRef } from 'react';
import { CgShare } from "react-icons/cg";
import { TbArrowsLeftRight } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { image_list } from '../../../helpers/constants';

export default function ProductCard({item_info}){
    const { 
        product_id ,
        product_name ,
        product_price ,
        discounted_percentage ,
        is_new_product ,
        product_style_inspiration,
        Product_images
    } = item_info ;
    
    let imgSrc = Product_images[0].is_cover_image && Product_images[0].product_image_id ;
    let discountPrice = product_price - (product_price * discounted_percentage / 100);
    
    const overlayRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate() ;

    const handleClickOnCompare = () =>{
        navigate(`/single-product/${product_id}` , {
            state : {...item_info}
        });
    }

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
    }, []); 

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
                            <span onClick={handleClickOnCompare}>
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
                    <img src={image_list.get(imgSrc)} alt={imgSrc} />
                    <div className='tag-container'>
                        {discounted_percentage > 0 && <div className='discount-tag'>-{discounted_percentage}%</div>}
                        {is_new_product && <div className='new-product-tag'>New</div>}
                    </div>
                </div>

                <div className="card-info-container">
                    <span className="product-name">{product_style_inspiration}</span>
                    <span className="product-type">{product_name}</span>
                    <div className='price-container'>
                        <span className="discount-percentage">Rp{' '+ discountPrice + '.000'}</span>
                        {discounted_percentage > 0 && <span className="product-price">Rp{' '+ product_price + '.000'}</span>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}