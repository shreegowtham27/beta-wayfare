import React from "react"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import { FaCcVisa } from "react-icons/fa"
import {RiShieldCrossFill,RiHotelFill} from "react-icons/ri"
import {BsCurrencyExchange} from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"
import {GiCommercialAirplane,GiPikeman,GiSchoolBag} from "react-icons/gi"
import ContactForm from "./components/contact"
import { NextSeo } from "next-seo"


const OurServices  = () =>{
    return(
        <div>
            <NextSeo
                title="Our Services | Wayfare Holiday"
                description="Wayfare Holidays provide the best and afforadable tourism package in TamilNadu. Here are a few services provided by wayfare Holidays."
                canonical="https://www.wayfareholidays.com/"
                openGraph={{
                url: 'https://www.wayfareholidays.com/our-services',
                title: 'Our Services | Wayfare Holiday',
                description: 'Wayfare Holidays provide the best and afforadable tourism package in TamilNadu. Here are a few services provided by wayfare Holidays.',
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
            />
            <NavBar/>
            <h1 className="text-center text-primary p-5">Our Services</h1>
            <Container>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                    <h2 className="text-primary text-center p-3">Air Ticketing</h2>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">From quick trips to marvel adventures, find the best-in-class flights at the best and most affordable prices.</p>
                    </Col>
                    <Col sm={1} md={4}>
                        <GiCommercialAirplane size={250} className="text-primary" />
                    </Col>
                </Row>
                <Row className="bg-white p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Hotels</h2>
                    <Col sm={1} md={4}>
                        <RiHotelFill size={250} className="text-primary" />
                    </Col>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">From budget friendly hotels to grand suites, we met your standard of staycation right here. Compare and choose your desired hotel at exclusive rates.</p>
                    </Col>
                </Row>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Land Packages</h2>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2"> From hotel accommodations to attraction reservations, everything will get done here at a fair fare.</p>
                    </Col>
                    <Col sm={1} md={4}>
                        <GiSchoolBag size={250} className="text-primary" />
                    </Col>
                </Row>
                <Row className="p-5 justify-content-center align-items-center">
                    <h2 className="text-primary text-center p-3">Transportation</h2>
                    <Col sm={1} md={4}>
                        <AiFillCar size={250} className="text-primary" />
                    </Col>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">We provide the best deals that you can get on wheels. From family vehicles to luxury sedans everything you can find right here.</p>
                    </Col>
                </Row>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Guided Tours</h2>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">  Get the expertise of every location at your side. Make your trip more knowledgeable and enjoyable with our escorted guide.</p>
                    </Col>
                    <Col sm={1} md={4}>
                        <GiPikeman size={250} className="text-primary" />
                    </Col>
                </Row>
                <Row className="bg-white p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Visa</h2>
                    <Col sm={1} md={4}>
                        <FaCcVisa size={250} className="text-primary" />
                    </Col>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2"> It may be too late or too early, we will get done your Visa processing on time. Get the hassle-free adventure at every point.</p>
                    </Col>
                </Row>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Insurance</h2>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">  Whether it is domestically or internationally, the quality and safety of your travel are assured with our insurance. The best-in-class insurance that covers all your unforeseen losses. </p>
                    </Col>
                    <Col sm={1} md={4}>
                        <RiShieldCrossFill size={250} className="text-primary" />
                    </Col>
                </Row>
                <Row className="bg-white p-5 justify-content-center align-items-center">
                <h2 className="text-primary text-center p-3">Forex</h2>
                    <Col sm={1} md={4}>
                        <BsCurrencyExchange size={250} className="text-primary" />
                    </Col>
                    <Col sm={1} md={8}>
                        <p style={{fontSize:'24px'}} className="px-2">From quick visits to international trips, anywhere anytime get the best of hassle free money exchange at your door step.</p>
                    </Col>
                </Row>
            </Container>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
export default OurServices