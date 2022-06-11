import { NextSeo } from "next-seo"
import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/footer"
import NavBar from "./components/navbar"

const Tos =() =>{
    return(
        <div className="tos-page">
            <NextSeo
                title="Wayfare Holiday - Terms and conditions"
                description="We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service."
                canonical="https://www.wayfareholidays.com/"
                keywords="hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai"
                openGraph={{
                url: 'https://www.wayfareholidays.com/terms-and-conditions',
                title: 'Wayfare Holiday - Terms and conditions',
                description: 'We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service.',
                images: [
                    {
                        url: 'https://www.wayfareholidays.com/logo.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Wayfare Holidays',
                        type: 'image/jpeg',
                    }
                ],
                site_name: 'https://www.wayfareholidays.com',
                }}
                twitter={{
                    handle: '@HolidaysWayfare',
                    site: '@HolidaysWayfare',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                    property: 'keywords',
                    content: 'hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai'
                }]}
            />
            <NavBar/>
            <Container>
                <h1 className="p-4 text-center">TERMS AND CONDITIONS</h1>

                <ol className="list-styled lh-lg">
                    <li>The package does not cover laundry, phone calls, tips and gratuities, mineral water, mild and strong beverages, or porterage costs.</li>
                    <li>The package does not cover any additional sightseeing or car usage not stated in the itinerary.</li>
                    <li>All entrance fees will be paid directly according to the itinerary.</li>
                    <li>For additional sightseeing, the customer is responsible for paying the entry fee and guide costs on the spot for additional sightseeing.</li>
                    <li>Any costs incurred as a result of natural disasters such as pandemics or epidemics, landslides, road blockages, political unrest (strikes), and so on (to be borne by the client, who is directly payable on the spot)</li>
                    <li>Camera and video camera charges are to be paid by the clients.</li>
                    <li>The Client is solely responsible for ensuring that they have relevant travel documents, such as ids, passports, visas (including transit visas), and so on with them, in order to complete the journey. The user acknowledges that Wayfare Holidays will not be held responsible if he or she is unable to travel due to the lack of appropriate travel documents</li>
                    <li>Unused services cannot be refunded once the trip has begun. No refund can be made for absence by travellers from any part of the itinerary.</li>
                    <li>Cancellation fees would be assessed as per company policy.</li>
                </ol>

                <h2 className="py-3">Important Note</h2>

                <ol className="list-styled lh-lg">
                    <li>Rates are not valid during peak holiday seasons such as New Year&apos;s, Diwali, Pushkar Fair, and so on.</li>
                    <li>Rates are based on hotel and Reservations are subject to availability at the time of booking. If the mentioned hotels are unavailable, alternate accommodations will be arranged in a similar category hotel.</li>
                    <li>Rates may change if there is a fair or festival, a major conference, or other events in the travel destination.</li>
                    <li>Early check-ins and late check-outs are subject to room availability.</li>
                    <li>The confirmed vehicle will be as per the itinerary and will not be available for use. AC will only operate in the plains and will be turned off during hill drives.</li>
                    <li>All sightseeing mentioned is subject to weather, politics, and traffic conditions at the destination.</li>
                    <li>Any sightseeing missed due to natural disasters like landslides, floods, pandemic/epidemic crises or bad weather is non-refundable.</li>
                    <li>It is not recommended to travel at night; if necessary, a supplement charge will apply.</li>
                    <li>The clients are advised to take care of their belongings during the trip. In case of any theft, we won’t be held responsible.</li>
                </ol>
                <h4 className="py-3">PAYMENT POLICY</h4>

                <ol className="list-styled lh-lg">
                    <li>A deposit of 25% of the package cost is required at the time of booking.</li>
                    <li>Full payment of the package cost is required at least a week before the departure date.</li>
                </ol>

                <h4 className="py-3">CANCELLATION POLICY</h4>

                <ol className="list-styled lh-lg">
                    <li>90% full tour cost will be refunded - 15 days before the tour.</li>
                    <li>75% full tour cost will be refunded - 7 days before the tour.</li>
                    <li>50% full tour cost will be refunded – 48 hrs before the tour.</li>
                    <li>25% full tour cost will be refunded – 24 hrs before the tour</li>
                </ol>
            </Container>
            <Footer/>
        </div>
    )
}

export default Tos