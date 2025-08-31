import Button from '../../../button/Button';
import './NewCollection.scss';
import { useNavigate } from 'react-router-dom';

export default function NewCollection(){
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/shop' , {
            state: { from: 'homepage', showNewCollection: true }
        });
    }
    return (
        <div className="new-collection-container">
            <p className='text1'>New Arrival</p>
            <span className='text2'>Discover Our <br/> New Collection</span>
            <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Button 
                text='BUY NOW'
                handleClick={handleClick}
            />
        </div>
    );
}    