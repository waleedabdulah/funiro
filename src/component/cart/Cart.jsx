import Banner from "../banner/Banner";

export default function Cart(){

    return (
        <section>
            <Banner  
                title='Cart' 
                hasToShowLogo={true} 
                currentPage='Cart' 
            />
        </section>
    )
}