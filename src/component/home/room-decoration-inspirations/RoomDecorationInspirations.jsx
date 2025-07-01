import React , {useRef , useState} from 'react'
import Button from '../../button/Button';
import './RoomDecorationInspirations.scss';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import RoomInspirationImg01 from '../../../assets/home/RoomInspiration01.png'
import RoomInspirationImg02 from '../../../assets/home/RoomInspriationImg02.png'                    
import RoomInspirationImg03 from '../../../assets/home/RoomInspriationImg03.png'
import { IoIosArrowForward } from "react-icons/io";

export default function RoomDecorationInspirations(){
    const images = [ RoomInspirationImg01 , RoomInspirationImg02, RoomInspirationImg03 , RoomInspirationImg01 ]
    const [ activeIndex , setActiveIndex ] = useState(0);
    const sliderRef = useRef()

    const itemsRef = useRef([]); // Array of refs
    const currentIndex = useRef(0);

    const handleScrollRight = () => {
        const items = itemsRef.current;
        if (!items || items.length === 0) return;
      
        if (currentIndex.current < items.length - 1) 
            currentIndex.current += 1;
        else 
          currentIndex.current = 0; // wrap to start
      
        items[currentIndex.current].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    };


    const handleActiveImage = () => {
        if( activeIndex !== 3)
            setActiveIndex(prev => prev +1); // ✅ update for UI
        else
            setActiveIndex(0)
    };
      
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

            <div className='slider_container'>
                <div 
                    className='active_image'
                    style={{
                        backgroundImage: `url(${images[activeIndex]})`,
                    }}
                >
                    <div className='image_info'>
                        <span className='category'>01 <MdOutlineHorizontalRule /> Bed Room</span>
                        <span>Inner Peace</span>
                    </div>
                    <button 
                        className='next_btn' 
                        onClick={handleActiveImage}
                    >
                        <IoIosArrowRoundForward size={35} color='white'/>
                    </button>
                </div>

                <div className='slider_images'>
                    <div className='images' ref={sliderRef}>
                        {
                            images.map((img, i) => {
                                return (
                                    <div className='next_img' key={i} ref={el => itemsRef.current[i] = el}>
                                        <img src={img} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='active_bar'>
                        {
                            [0, 1, 2, 3].map((_, i) => {
                                if( i === activeIndex )
                                    return (
                                        <div key={i} className='active_one'><span></span></div>
                                    )
                                else
                                    return <span></span>    
                            }
                        )}
                    </div>

                    <button 
                        className='slider_btn' 
                        onClick={handleScrollRight}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    )
};