import React , {useState} from 'react';
import Banner from '../banner/Banner';
import RelatedProducts from './related-product/RelatedProducts';
import ProductComparisonTable from './product-comparison-table/ProductComparisonTable';
import Slider from '../slider/Slider.jsx'

export default function ProductComparison(){
    const [selectedItemForComparison , setSelectedItemForComparison] = useState({
        'first' : null,
        'second' : null,
    })

    console.log('selectc : ' , selectedItemForComparison)
    return (
        <section>
            <Banner
                hasToShowLogo={true} 
                currentPage={'Comparison'}
                title={'Product Comparison'}    
            />
            
            <div style={{padding: '0rem 3rem 3rem 3rem'}}>
                <RelatedProducts
                    selectedItemForComparison={selectedItemForComparison}
                    setSelectedItemForComparison={setSelectedItemForComparison}
                />

                <ProductComparisonTable
                    selectedItemForComparison={selectedItemForComparison}
                />
            </div>

            <Slider />            
        </section>   
    )
}