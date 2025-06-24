import Banner from "../banner/Banner"
import Slider from "../slider/Slider"
import ProductItemsContainer from "./product-items-container/ProductItemsContainer"

export default function Shop(){
    
    return (
        <div>
            <Banner
                hasToShowLogo={false}
                currentPage={'Shop'}
                title={'Shop'}
            /> 
            
            <ProductItemsContainer />

            <Slider />
        </div>
    )
}