import './Header.scss'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/header/Logo.svg'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsPersonExclamation } from "react-icons/bs";

export default function Header(){

    return (
        <div className="header-container">
           <div className="logo">
                {/* <TollIcon style={{fontSize: '2rem'}}/> */}
                <img src={Logo} alt='Logo' />
                <h2>Funiro</h2>
           </div>

           <div className="navbar-item">
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
           </div>

           <div className="icons">
                <BsPersonExclamation />
                <CiSearch />
                <CiHeart />
                <BsCart3 />
           </div> 
        </div>
    )
}