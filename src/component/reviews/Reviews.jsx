
import React  , {useState} from "react";
import './Reviews.scss'
import { PiStar , PiStarFill , PiLineVerticalThin } from "react-icons/pi";

export default function Reviews( { count = 0 }){
    const [reviewCount, setReviewCount] = useState(3);

    const handleClick = (count) => {
        setReviewCount(count);
    };

    return (
        <span  className="reviews">
            { 
                count !== 0 ? 
                <span className="total-reviews">4.7</span>
                : ''
            }
            <span>
                {[...Array(5)].map((_, i) => {
                    const index = i + 1;
                    return index <= reviewCount ? (
                        <PiStarFill
                            key={index}
                            onClick={() => handleClick(index)}
                            color="gold"
                            size={15}
                        />
                    ) : (
                        <PiStar
                            key={index}
                            onClick={() => handleClick(index)}
                            color="gold"
                            size={15}
                        />
                    );
                })}
            </span>
            <span><PiLineVerticalThin size={26} /> {count} {count === 0 && 'Customer'} Review</span>
        </span>

    )
}