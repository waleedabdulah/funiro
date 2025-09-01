import React , { useState } from "react";
import './RelatedProducts.scss';
import Card from "../../card/comparison-card/Card";
import { useWindowSize } from "../../../context/ui-adjustment-context/UIAdjustmentContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RelatedProducts(){
    const windowSize = useWindowSize();
    const [selectedValue, setSelectedValue] = useState("default");
    const products_list = useSelector(state => state.productItems.allProducts)
    const navigate = useNavigate();
    
    return (
        <section className="related-products-container">
            {
                windowSize.width > 768 &&
                <div className="view-more">
                    <span>Go to Product page for more Products</span>
                    <button
                        onClick={() => navigate('/shop')}
                    >
                        View More
                    </button>
                </div>
            }
            
            <div className='cards'>
                {
                    products_list.filter((item) => {
                        if(selectedValue === 'discounted_items')
                            return item.discounted_percentage > 0
                        else if(selectedValue === 'new_items')
                            return item.is_new_product
                        else if( selectedValue === 'price_low_high')
                            return false
                        else if( selectedValue === 'price_high_low')
                            return false
                        else
                            return true
                    }).map((item) => <Card key={item.product_id} item={item} />)
                }
            </div>

            <div className="choose-product">
                <label htmlFor="product-filter">Add A product</label>
                <select 
                    id="product-filter" 
                    name="filter"
                    defaultValue={selectedValue}
                    onClick={(e) => setSelectedValue(e.target.value) }
                >
                    <option value="default">Choose a Product</option>
                    <option value="discounted_items">Discounted Items</option>
                    <option value="new_items">New Items</option>
                    <option value="price_low_high">Price: Low to High</option>
                    <option value="price_high_low">Price: High to Low</option>
                </select>
            </div>
        
        </section>
    )
}