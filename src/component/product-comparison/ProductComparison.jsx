import React from 'react';
import Banner from '../banner/Banner';
import RelatedProducts from './related-product/RelatedProducts';
import { product_info_dummy } from '../../helpers/constants';
import ProductComparisonTable from './product-comparison-table/ProductComparisonTable';
import Slider from '../slider/Slider.jsx'

export default function ProductComparison(){
    
    return (
        <section>
            <Banner
                hasToShowLogo={true} 
                currentPage={'Comparison'}
                title={'Product Comparison'}    
            />
            
            <div style={{padding: '0rem 3rem 3rem 3rem'}}>
                <RelatedProducts />

                <ProductComparisonTable />
            </div>

            <Slider />            
        </section>   
    )
}