import React from "react"
import Banner from "../banner/Banner"
import BillingDetails from "./biiling-details/BillingDetails"

export default function Checkout(){
    return (
        <section>
            <Banner
                hasToShowLogo={true}
                currentPage={'Checkout'}
                title={'Checkout'}
            /> 

            <BillingDetails />
        </section>
    )
}