import Banner from "../banner/Banner";
import Slider from "../slider/Slider";
import BlogItems from "./blog-items/BlogItems";
import { useState , useEffect } from "react";

export default function Blog(){
    
    
    return (
        <section>
            <Banner 
                title='BLog'  
                hasToShowLogo={true} 
                currentPage='Blog' 
            />
            <BlogItems />
            <Slider />
        </section>
    )
}