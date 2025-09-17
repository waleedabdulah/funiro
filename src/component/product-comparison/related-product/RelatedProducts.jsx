import React , { useState , useEffect, useRef , memo} from "react";
import './RelatedProducts.scss';
import Card from "../../card/comparison-card/Card";
import { useWindowSize } from "../../../context/ui-adjustment-context/UIAdjustmentContext";
import { useNavigate } from "react-router-dom";
import { useFilteredProductItems } from "../../../hooks/react-query/useFilteredProductItems";

function RelatedProducts({
    selectedItemForComparison,
    setSelectedItemForComparison
}){
    const windowSize = useWindowSize();
    const [selectedValue, setSelectedValue] = useState("low_to_high");
    const { data , fetchNextPage, hasNextPage, isFetchingNextPage } = useFilteredProductItems( 10 , selectedValue);
    
    const allProducts = data?.pages.flatMap(page => page.products) || [];

    const observerRef = useRef()
       
    const navigate = useNavigate();

    useEffect(() => {
        if (!observerRef.current) return;
      
        const observer = new IntersectionObserver(
          (entries) => {
            if(entries[0].isIntersecting)
                console.log('intersect' , hasNextPage , !isFetchingNextPage)
            if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          },
          { threshold: 0.1 }
        );
      
        observer.observe(observerRef.current);
      
        return () => {
          if (observerRef.current) observer.unobserve(observerRef.current);
        };
      }, [hasNextPage, isFetchingNextPage, fetchNextPage, data]);
        
      
    // useEffect(() => {
    //     setSelectedItemForComparison(prev => {
    //       if (windowSize.width < 769) {
    //         return {
    //           ...prev,
    //           third: null,  
    //         };
    //       }
    //       return prev; 
    //     });
    // }, [windowSize.width]);
      
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
                    allProducts.map(function(item , index) { 
                            return (
                                <>
                                    <Card 
                                        key={item.product_id} 
                                        item={item} 
                                        selectedItemForComparison={selectedItemForComparison}
                                        setSelectedItemForComparison={setSelectedItemForComparison}
                                    />
                                    {
                                        index === allProducts.length - 1 && ( 
                                        <div 
                                            ref={observerRef} 
                                            style={{ height: "40px", color: "transparent" }}
                                        >
                                            {isFetchingNextPage && <p>Loading more...</p>}
                                        </div>
                                    )}
                                </>
                            )
                        })
                }
               
            </div>

            <div className="choose-product">
                <label htmlFor="product-filter">Add A product</label>
                <select 
                    id="product-filter" 
                    name="filter"
                    defaultValue={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value) }
                >
                    <option value="discounted_items">Discounted Items</option>
                    <option value="new_products">New Items</option>
                    <option value="low_to_high">Price: Low to High</option>
                    <option value="high_to_low">Price: High to Low</option>
                </select>
            </div>
        
        </section>
    )
}

export default memo(RelatedProducts);