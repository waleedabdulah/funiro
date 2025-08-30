import  './Home.scss';  
import React , {useState, useEffect} from 'react';
import Banner from './banner/Banner';
import CategoryItems from './category-items/CategoryItems';
import ProductItems from './product-items/ProductItems';
import RoomDecorationInspirations from './room-decoration-inspirations/RoomDecorationInspirations';
import DiverseFurnitureOptions  from './diverse-furniture-options/DiverseFurnitureOptions';
import Loader from '../fallback-loader/Loader';
import { useSelector } from 'react-redux';

export default function Home(){
    const products_list = useSelector(state => state.productItems.allProducts)
    const [itemsShowing, setItemsShowing] = useState([]);

    useEffect(() => {
        if (products_list.length > 0) {
          setItemsShowing(products_list.slice(0, 8));
        }
    }, [products_list]);
    
    function appropriateProductListDivision() {
        if (products_list.length > 16 && itemsShowing.length > 0) 
            setItemsShowing([...itemsShowing, ...products_list.slice(8, 16)]);
    }
 
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