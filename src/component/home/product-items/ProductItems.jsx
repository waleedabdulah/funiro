import Heading from '../../heading/Heading';
import './ProductItems.scss';
import ProductCard from '../../card/product-card/ProductCard.jsx';
import { useNavigate } from 'react-router-dom';

export default function ProductItems({isShowMoreBtn = false , itemsShowing , onShowMore}){
    const navigate = useNavigate();

    function navigateToShopScreen(){
        navigate('/shop')
    } 

    return (
        <div className="product-items-container">
            <Heading text='Our Products' />

            <div className='product-cards-container'>
                {
                    itemsShowing?.map((item, index) =>
                        <ProductCard key={index} item_info={item} />        
                    )
                }
            </div>

            {
                isShowMoreBtn &&
                ( 
                    itemsShowing.length < 16 ?
                    <button 
                        onClick={onShowMore}
                        className='show-more-btn'
                    >
                        Show More
                    </button> :
                    <button 
                        onClick={navigateToShopScreen}
                        className='show-more-btn'
                    >
                        We recommend you to visit our all product list
                    </button>
                )
            }
        </div>
    )
}
