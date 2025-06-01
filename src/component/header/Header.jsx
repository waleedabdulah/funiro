// import TollIcon from '@mui/icons-material/Toll';
import './Header.scss'
import { NavLink } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header(){

    return (
        <div className="header-container">
           <div className="logo">
                {/* <TollIcon style={{fontSize: '2rem'}}/> */}
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
            {/* <ReportGmailerrorredIcon />
            <SearchIcon /> 
            <FavoriteBorderOutlinedIcon />
            <ShoppingCartOutlinedIcon /> */}
           </div> 
        </div>
    )
}