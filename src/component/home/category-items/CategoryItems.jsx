import CategoryItemCard from './category-item-card/CategoryItemCard';
import './CategoryItems.scss';
import CategoryItem01 from '../../../assets/home/categoryItem01.png';
import CategoryItem02 from '../../../assets/home/categoryItem02.png';
import CategoryItem03 from '../../../assets/home/categoryItem03.png';
import Heading from '../../heading/Heading.jsx';

export default function CategoryItems(){

    return (
        <div className='category-items-container'>
            <div className='text'>
                <Heading text='Browse The Range' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='category-item-cards'>
                <CategoryItemCard
                 imgPath={CategoryItem01} 
                 categoryName='Dining'   
                />
                <CategoryItemCard
                 imgPath={CategoryItem02}
                 categoryName='Living'
                />
                <CategoryItemCard
                 imgPath={CategoryItem03}
                 categoryName='Bedroom'
                />
            </div>
        </div>
    )
}