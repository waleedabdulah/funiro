import './Card.scss';
import ProductImg from '../../../assets/single-product/item04.png';
import Reviews from '../../reviews/Reviews';

export default function Card(){

    return (
        <div className='product-comparison-card-container'>
            <div className='img-section'>
                <img src={ProductImg} />
            </div>

            <div className='text-section'>
                <span>Asgaard Sofa</span>
                <span>Rs. 250,000.00</span>
                <Reviews count={125} />
            </div>
        </div>
    )
}
