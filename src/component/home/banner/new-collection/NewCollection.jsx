import Button from '../../../button/Button';
import './NewCollection.scss';
export default function NewCollection(){

    return (
        <div className="new-collection-container">
            <p className='text1'>New Arrival</p>
            <span className='text2'>Discover Our <br/> New Collection</span>
            <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Button text='BUY NOW' />
        </div>
    );
}    