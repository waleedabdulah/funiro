import React, { useState } from 'react';
import './DetailedProductInfo.scss';
import ProductImg01 from '../../../assets/single-product/item01.png'
import ProductImg02 from '../../../assets/single-product/item02.png'
import { useWindowSize } from '../../../context/ui-adjustment-context/UIAdjustmentContext';
import { PiStar , PiStarFill } from 'react-icons/pi';

const DetailedProductInfo = () => {
    const [activeTab, setActiveTab] = useState('description');
    const windowSize = useWindowSize();
    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'additional', label: 'Additional Information' },
        { id: 'reviews', label: 'Reviews [5]' }
    ];
    const [reviewCount, setReviewCount] = useState(3);
    
    const handleClick = (count) => {
        setReviewCount(count);
    };
    
    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="tab-content">
                        <p>
                            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the 
                            unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                        </p>
                        <p>
                            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar 
                            as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced 
                            audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. 
                            The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced 
                            leather strap enables easy and stylish travel.
                        </p>
                        
                        <div className="product-images-grid">
                            <div className="image-container">
                                <img src={ProductImg01} alt="Product view 1" />
                            </div>
                            <div className="image-container">
                                <img src={ProductImg02} alt="Product view 2" />
                            </div>
                        </div>
                    </div>
                );
            
            case 'additional':
                return (
                    <div className="tab-content">
                        <div className="additional-info-table">
                            <div className="info-row">
                                <span className="info-label">Weight:</span>
                                <span className="info-value">25kg</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Dimensions:</span>
                                <span className="info-value">30cm x 30cm x 30cm</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Material:</span>
                                <span className="info-value">Wood, Metal</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Color:</span>
                                <span className="info-value">Brown, Black, White</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Care Instructions:</span>
                                <span className="info-value">Clean with dry cloth</span>
                            </div>
                        </div>
                    </div>
                );
            
            case 'reviews':
                return (
                    <div className="tab-content">
                        <div className="reviews-section">
                            <div className="review-item">
                                <div className="review-header">
                                    <h4>John Doe</h4>
                                    <div className="stars">★★★★★</div>
                                </div>
                                <p>Amazing product! Great quality and fast delivery. Highly recommended.</p>
                            </div>
                            
                            <div className="review-item">
                                <div className="review-header">
                                    <h4>Jane Smith</h4>
                                    <div className="stars">★★★★☆</div>
                                </div>
                                <p>Good product overall, but could be improved in some areas.</p>
                            </div>
                            
                            <div className="review-item">
                                <div className="review-header">
                                    <h4>Mike Johnson</h4>
                                    <div className="stars">★★★★★</div>
                                </div>
                                <p>Excellent craftsmanship and attention to detail. Worth every penny!</p>
                            </div>
                            
                            <div className="add-review">
                                <h4>Add a Review</h4>
                                <div className='review'>
                                    <textarea placeholder="Write your review here..." rows="4"></textarea>
                                    {[...Array(5)].map((_, i) => {
                                        const index = i + 1;
                                        return index <= reviewCount ? (
                                            <PiStarFill
                                                key={index}
                                                onClick={() => handleClick(index)}
                                                color="gold"
                                                size={20}
                                            />
                                        ) : (
                                            <PiStar
                                                key={index}
                                                onClick={() => handleClick(index)}
                                                color="gold"
                                            />
                                        );
                                    })}
                                </div>
                                <button>Submit Review</button>
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="product-tabs-container">
            {/* Tab Navigation */}
            <div className="tab-navigation">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            
            {/* Tab Content */}
            <div className="tab-content-container">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default DetailedProductInfo;