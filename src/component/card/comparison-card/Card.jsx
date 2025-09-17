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
        product_images,
        final_price
    } = item ;

    const isSelected = Object.values(selectedItemForComparison).includes(product_name);
    
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
        } 
      }
      setSelectedItemForComparison(newSelection);
    }

    return (
        <div 
            // style={{
            //     border: isSelected &&  '1px solid black'
            // }}
            onClick={handleClick}
            className={`product-comparison-card-container ${isSelected ? 'selected-animated-gradient' : ''}`}
            
            // className='product-comparison-card-container'
        >
            <div className='img-section'>
                <img 
                    src={ 
                            product_images[0].is_cover_image ?
                                image_list.get(product_images[0].image_id)
                                :
                                   ProductImg
                    } 
                />
            </div>

            <div className='text-section'>
                <span>{product_name}</span>
                <span>Rs. {final_price}.00</span>
                <Reviews count={125} />
            </div>
        </div>
    )
}
