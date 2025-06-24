import Banner from "../banner/Banner";
import BlogItems from "./blog-items/BlogItems";

export default function Blog(){

    return (
        <section>
            <Banner 
                title='BLog'  
                hasToShowLogo={true} 
                currentPage='Blog' 
            />

            <BlogItems />
        </section>
    )
}