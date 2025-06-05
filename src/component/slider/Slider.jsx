import React from 'react';
import './Slider.scss';
import { shopScreen_slider_content } from '../../helpers/constants';

export default function Slider(){

    return (
       <div className="slider-container">
            <div 
                className="slider-track"
            >
                {[...shopScreen_slider_content].map((slider_item, index) => (
                    <div className="content" key={index}>
                        <img src={slider_item.logo} alt="" />
                        <div className="text">
                            <span>{slider_item.title}</span>
                            <span>{slider_item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
}