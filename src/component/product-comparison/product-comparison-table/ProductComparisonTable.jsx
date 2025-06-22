import React from 'react'
import { product_info_dummy } from '../../../helpers/constants'
import './ProductComparisonTable.scss';
import Button from '../../button/Button.jsx';
import { useWindowSize } from '../../../context/ui-adjustment-context/UIAdjustmentContext.jsx';

export default function ProductComparisonTable(){
    const {windowSize} = useWindowSize()
    return (
        <div className="table">
            <table 
                style={{ 
                    borderCollapse: 'collapse',
                    width: '100%',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center'
                }}
            >
                {
                    product_info_dummy.map( (info , index) => {
                        return (
                            <>
                                <thead>
                                    <tr>
                                        <th>{Object.keys(info)[0]}</th>
                                        <th></th>
                                        <th></th>
                                        {windowSize > 768 ? <th></th> : null}
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            info[Object.keys(info)[0]].map((row) => 
                                                <tr>    
                                                    {   
                                                        row.map(value => 
                                                            <td>{value}</td>
                                                    )}   
                                                    {windowSize > 768 ? <td></td> : null}
                                                </tr>
                                        )}    

                                        {
                                            (product_info_dummy.length-1) === index && 
                                            <>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <button>Add To Cart</button>
                                                        {/* <Button text='Add To Cart' /> */}
                                                    </td>
                                                    <td>
                                                        <button>Add To Cart</button>
                                                        
                                                        {/* <Button text='Add To Cart' /> */}
                                                    </td>
                                                    {windowSize > 768 ? <td></td> : null}
                                                </tr>
                                            </>
                                            
                                        }
                                </tbody>
                            </> 
                        )
                    })
                }
            </table>
        </div>

    )
}