import React from "react";
import './ProductBar.scss';
import { useWindowSize } from "../../../context/ui-adjustment-context/UIAdjustmentContext";

export default function ProductBar({productName}){
    const windowSize = useWindowSize();

    return (
        <div className="product_bar_container">
            <div className='flag'>
                {
                    windowSize.width <= 425  ?
                        <pre>   Home <span>{'  >  '}</span> Shop <span>{'  > '}</span>{'  |   '}<span>{productName}</span></pre>
                        : <pre>       Home <span>{'  >  '}</span> Shop <span>{'  > '}</span>{'  |   '}<span>{productName}</span></pre>
                }    
            </div>
        </div>
    )
}