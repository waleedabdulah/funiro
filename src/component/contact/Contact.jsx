import Banner from "../banner/Banner";
import ContactInfo from "./contact-info/ContactInfo";
import Slider from "../slider/Slider";

export default function Contact(){
    return (
        <section>
            <Banner
                hasToShowLogo={true}
                currentPage={'Contact'}
                title={'Contact'}
            /> 

            <ContactInfo />

            <Slider />
        </section>
    )
}