import './Card.scss';
import React from 'react';
import ProductImg from '../../../assets/single-product/item04.png';
import Reviews from '../../reviews/Reviews';
import { discountedPrice } from '../../../helpers/utils';
import { image_list } from '../../../helpers/constants';

export default function Card({
    item ,
    setSelectedItemForComparison ,
    selectedItemForComparison
  }){
    const { 
        product_name ,
        product_price ,
        discounted_percentage ,
        Product_images
    } = item ;

    const isSelected = Object.values(selectedItemForComparison).includes(product_name);
    
    let discountPrice = discountedPrice(product_price, discounted_percentage);

    function handleClick() {
      const newSelection = { ...selectedItemForComparison };
      
      if (isSelected) {
        for (const key in newSelection) {
          if (newSelection[key] === product_name) {
            newSelection[key] = null;
            break;
          }
        }
      } else {
        // If not selected, add it to the first available slot
        if (!newSelection.first) {
          newSelection.first = product_name;
        } else if (!newSelection.second) {
          newSelection.second = product_name;
        } else if (!newSelection.third) {
          newSelection.third = product_name;
        }
      }
      setSelectedItemForComparison(newSelection);
    }

    return (
        <div 
            style={{
                border: isSelected &&  '2px solid black'
            }}
            onClick={handleClick}
            className='product-comparison-card-container'
        >
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
