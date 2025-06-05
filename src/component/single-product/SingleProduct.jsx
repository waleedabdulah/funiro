import React from "react"
import { useParams , useLocation} from "react-router-dom"
import ProductBar from "./product-bar/ProductBar";
import ProductInfo from "./product-information/ProductInfo";

export default function SingleProduct(){
    const location = useLocation();
    
    const itemInfo = location.state;
    console.log(location.state)
    const {product_id} = useParams();

    return (
        <div className="single_product">
            <ProductBar productName={itemInfo.productName} />
            <ProductInfo productInfo={itemInfo} />
        </div>

    )
}