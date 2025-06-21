import React from "react";
import './RelatedProducts.scss';
import Card from "../../card/comparison-card/Card";
import { useWindowSize } from "../../../context/ui-adjustment-context/UIAdjustmentContext";

export default function RelatedProducts(){
    const windowSize = useWindowSize();

    return (
        <section className="related-products-container">
            {
                windowSize.width > 768 &&
                <div className="view-more">
                    <span>Go to Product page for more Products</span>
                    <button>View More</button>
                </div>
            }
            
            <div className='cards'>
                <Card />
                <Card />
            </div>

            {
                windowSize.width > 768 &&
                <div className="choose-product">
                   <label for="product-filter">Add A product</label>
                    <select id="product-filter" name="filter">
                        <option value="default">Choose a Product</option>
                        <option value="discounted_items">Discounted Items</option>
                        <option value="new_items">New Items</option>
                        <option value="price_low_high">Price: Low to High</option>
                        <option value="price_high_low">Price: High to Low</option>
                    </select>
                </div>
            }

        </section>
    )
}