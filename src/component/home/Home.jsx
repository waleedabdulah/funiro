import  './Home.scss';  
import Banner from './banner/Banner';
import CategoryItems from './category-items/CategoryItems';
import ProductItems from './product-items/ProductItems';
import RoomDecorationInspirations from './room-decoration-inspirations/RoomDecorationInspirations';
import DiverseFurnitureOptions  from './diverse-furniture-options/DiverseFurnitureOptions';

// import NewCollection from './NewCollection';

// import ArrowOnUser from '@/assets/landing-screen/Arrow_on_user.png';

import { products_list } from '../../helpers/constants';

export default function Home(){
    return (
        <div className='home-container'>
            <Banner />
            <CategoryItems />
            <ProductItems isShowMoreBtn={true} product_items={products_list}/>
            <RoomDecorationInspirations />
            <DiverseFurnitureOptions />
        </div> 
    )
}