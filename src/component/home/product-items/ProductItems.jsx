import Heading from '../../heading/Heading';
import './ProductItems.scss';
import ProductCard01 from '../../../assets/home/ProductCard01.png' 
import ProductCard02 from '../../../assets/home/ProductCard02.png' 
import ProductCard03 from '../../../assets/home/ProductCard03.png' 
import ProductCard04 from '../../../assets/home/ProductCard04.png' 
import ProductCard05 from '../../../assets/home/ProductCard05.png'
import ProductCard06 from '../../../assets/home/ProductCard06.png' 
import ProductCard07 from '../../../assets/home/ProductCard07.png' 
import ProductCard08 from '../../../assets/home/ProductCard08.png' 
import ProductCard from '../../card/product-card/ProductCard.jsx';

export default function ProductItems(){

    return (
        <div className="product-items-container">
            <Heading text='Our Products' />

            <div className='product-cards-container'>
                <ProductCard 
                    imgSrc={ProductCard01}
                    productName='Syltherine'
                    productType='Stylish cafe chair'
                    productPrice={3500}
                    discountPercentage={30}
                    isNewProduct={true}
                />

                <ProductCard 
                    imgSrc={ProductCard02}
                    productName='Leviosa'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                />

                <ProductCard 
                    imgSrc={ProductCard03}
                    productName='Syltherine'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                    discountPercentage={30}
                />

                <ProductCard 
                    imgSrc={ProductCard04}
                    productName='Leviosa'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                />

                <ProductCard 
                    imgSrc={ProductCard05}
                    productName='Leviosa'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                    isNewProduct={true}
                />

                <ProductCard 
                    imgSrc={ProductCard06}
                    productName='Syltherine'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                    discountPercentage={30}
                />

                <ProductCard 
                    imgSrc={ProductCard07}
                    productName='Leviosa'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                    isNewProduct={true}
                />

                <ProductCard 
                    imgSrc={ProductCard08}
                    productName='Leviosa'
                    productType='Stylish cafe chair'
                    productPrice={2500}
                /> 

            </div>

            <button className='show-more-btn'>
                Show More
            </button>
        </div>
    )
}
