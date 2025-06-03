import ProductItems from "../home/product-items/ProductItems"
import Banner from "./banner/Banner"
import FilterBar from "./filter-bar/FilterBar"

export default function Shop(){

    return (
        <div>
           <Banner /> 
           <FilterBar />
           <ProductItems />
        </div>
    )
}