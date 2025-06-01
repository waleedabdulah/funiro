import './Banner.scss';
import NewCollection from './new-collection/NewCollection';

export default function Banner(){

    return (
        <div className='img-container01'>
            {/* <div className='new-collection-container'> */}
                <NewCollection />
            {/* </div>     */}
        </div>
    )
}    