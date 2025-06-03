import ProductItems from "../home/product-items/ProductItems"
import Banner from "./banner/Banner"
import FilterBar from "./filter-bar/FilterBar"
import { products_list } from "../../helpers/constants"

export default function Shop(){
    
    return (
        <div>
           <Banner /> 
           <FilterBar />
          

           
        </div>
    )
}