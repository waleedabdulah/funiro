import Button from '../../button/Button';
import './RoomDecorationInspirations.scss';

export default function RoomDecorationInspirations(){

    return (
        <div className='room-inspirations-container'>
            <div className='explore'>
                <span className='text01'>
                50+ Beautiful rooms inspiration
                </span>
                <span className='text02'>
                Our designer already made a lot of beautiful prototype of rooms that inspire you
                </span>
                <Button text='Explore More' />
            </div>

            <div className='images'>
                {/* <div>

                </div> */}
            </div>

            <div className='carousel-container'></div>
        </div>
    )
};