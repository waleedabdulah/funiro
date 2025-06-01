import './CategoryItemCard.scss';

export default function CategoryItemCard({imgPath , categoryName}){

    return(
        <div className="category-item-card">
            <div className="img-container">
                <img src={imgPath} alt={imgPath} />
            </div>
        <span>{categoryName}</span>
        </div>   
    )
}