import  './Home.scss';  
import Banner from './banner/Banner';
import CategoryItems from './category-items/CategoryItems';
import ProductItems from './product-items/ProductItems';
import RoomDecorationInspirations from './room-decoration-inspirations/RoomDecorationInspirations';
import DiverseFurnitureOptions  from './diverse-furniture-options/DiverseFurnitureOptions';

// import NewCollection from './NewCollection';

// import ArrowOnUser from '@/assets/landing-screen/Arrow_on_user.png';

export default function Home(){
    return (
        <div className='home-container'>
            <Banner />
            <CategoryItems />
            <ProductItems />
            <RoomDecorationInspirations />
            <DiverseFurnitureOptions />
        </div> 
    )
}