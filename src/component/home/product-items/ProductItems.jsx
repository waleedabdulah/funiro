import Heading from '../../heading/Heading';
import './ProductItems.scss';
import ProductCard from '../../card/product-card/ProductCard.jsx';

export default function ProductItems({isShowMoreBtn = false , product_items}){

    return (
        <div className="product-items-container">
            <Heading text='Our Products' />

            <div className='product-cards-container'>
                {
                    product_items.map((item) =>
                        <ProductCard item_info={item} />        
                    )
                }
            </div>

            {
                isShowMoreBtn &&
                <button className='show-more-btn'>
                    Show More
                </button>
            }
        </div>
    )
}
