import React from "react";
import './ProductBar.scss';

export default function ProductBar({productName}){
    console.log('PRODUCT NAME  :' , productName)
    return (
        <div className="product_bar_container">
            <div className='flag'>
                <pre>       Home <span>{'  >  '}</span> Shop <span>{'  > '}</span>{'  |   '}<span>{productName}</span></pre>
            </div>
                {/* {console.log(state)} */}
        </div>

    )
}