import React from 'react';
import './Banner.scss';
import Logo from '../../assets/header/Logo.svg'
import { IoIosArrowForward } from "react-icons/io";

export default function Banner({ title , hasToShowLogo = false ,currentPage}){

    return (
        <div className='shop-banner-container'>
            <div className='title'>
                {
                    hasToShowLogo &&
                    <div>
                        <img src={Logo} />
                    </div>
                }
                <span className='title-text'>{title}</span>
                <span className='info'><b>Home</b> <IoIosArrowForward /> {currentPage} </span>
            </div>
        </div>
    )
}