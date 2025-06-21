import Banner from "../banner/Banner"
import FilterBar from "./filter-bar/FilterBar"
import Slider from "../slider/Slider"

export default function Shop(){
    
    return (
        <div>
            <Banner
                hasToShowLogo={false}
                currentPage={'Shop'}
                title={'Shop'}
            /> 
            <FilterBar />
            <Slider />
        </div>
    )
}