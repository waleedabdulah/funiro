import  './Home.scss';  
import React , {useState} from 'react';
import Banner from './banner/Banner';
import CategoryItems from './category-items/CategoryItems';
import ProductItems from './product-items/ProductItems';
import RoomDecorationInspirations from './room-decoration-inspirations/RoomDecorationInspirations';
import DiverseFurnitureOptions  from './diverse-furniture-options/DiverseFurnitureOptions';
import { products_list } from '../../helpers/constants';
import Loader from '../fallback-loader/Loader';

export default function Home(){
    

    function appropriateProductListDivision(){
        if( products_list.length > 16 )
            if( itemsShowing.length > 0 )
                setItemsShowing( [ ...itemsShowing , ...products_list.slice(8, 16) ])    
    } 


    const [itemsShowing , setItemsShowing] = useState([...products_list.slice(0, 8) ])

    return (
        <div className='home-container'>
            <Banner />
            <CategoryItems />
            <ProductItems 
                isShowMoreBtn={true}
                itemsShowing={itemsShowing}
                onShowMore={appropriateProductListDivision}
            />
            <RoomDecorationInspirations />
            <DiverseFurnitureOptions />
        </div> 
    )
}