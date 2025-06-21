import React from 'react'
import { product_info_dummy } from '../../../helpers/constants'
import './ProductComparisonTable.scss';
import Button from '../../button/Button.jsx';

export default function ProductComparisonTable(){

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
                                        <th></th>
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
                                                    <td></td>
                                                </tr>
                                        )}    

                                        {
                                            (product_info_dummy.length-1) === index && 
                                            <>
                                                <tr>
                                                    <td></td>
                                                    <td><Button text='Add To Cart' /></td>
                                                    <td><Button text='Add To Cart' /></td>
                                                <td></td>
                                            
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