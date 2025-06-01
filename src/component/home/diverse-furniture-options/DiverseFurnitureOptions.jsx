import React from "react";
import './DiverseFurnitureOptions.scss';
import Photo_01 from '../../../assets/home/diverse-options/Rectangle 36.svg';
import Photo_02 from '../../../assets/home/diverse-options/Rectangle 37.svg';
import Photo_03 from '../../../assets/home/diverse-options/Rectangle 38.svg';
import Photo_04 from '../../../assets/home/diverse-options/Rectangle 39.svg';
import Photo_05 from '../../../assets/home/diverse-options/Rectangle 40.svg';
import Photo_06 from '../../../assets/home/diverse-options/Rectangle 41.svg';
import Photo_07 from '../../../assets/home/diverse-options/Rectangle 43.svg';
import Photo_08 from '../../../assets/home/diverse-options/Rectangle 45.svg';
import Photo_09 from '../../../assets/home/diverse-options/Rectangle 44.svg';

const DiverseFurnitureOptions = () =>{

    return (
        <div className="container">
            <div className="heading-container">
                <span>Share your setup with</span>
                <h1>#FuniroFurniture</h1>
            </div>
            <div className="images-container">
                <div className="section-01">
                    <div className="row-01">
                        <img src={Photo_01} />
                        <img src={Photo_03} />
                    </div>
                    <div className="row-02">
                        <img src={Photo_02} />
                        <img src={Photo_04} />
                    </div>
                </div>

                <div className="section-02">
                    <img src={Photo_05} />
                </div>

                <div className="section-03">
                    <div className="row-01">
                        <img src={Photo_07} />
                        <img src={Photo_08} />
                    </div>
                    <div className="row-02">
                        <img src={Photo_06} />
                        <img src={Photo_09} />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  DiverseFurnitureOptions ;