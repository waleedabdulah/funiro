import './Card.scss';
import ProductImg from '../../../assets/single-product/item04.png';
import Reviews from '../../reviews/Reviews';
import { discountedPrice } from '../../../helpers/utils';
import { image_list } from '../../../helpers/constants';

export default function Card({item}){
    const { 
        product_name ,
        product_price ,
        discounted_percentage ,
        Product_images
    } = item ;
    let discountPrice = discountedPrice(product_price , discounted_percentage);

    return (
        <div className='product-comparison-card-container'>
            <div className='img-section'>
                <img 
                    src={ 
                            Product_images[0].is_cover_image ?
                                image_list.get(Product_images[0].product_image_id)
                                :
                                   ProductImg
                    } 
                />
            </div>

            <div className='text-section'>
                <span>{product_name}</span>
                <span>Rs. {discountPrice}.00</span>
                <Reviews count={125} />
            </div>
        </div>
    )
}
