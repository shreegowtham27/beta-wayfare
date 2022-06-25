import { NextSeo } from "next-seo";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Parallax, Background } from "react-parallax";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
// import About from "./Images/about.jpg"

const ImageUrl= "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001"

const AboutUs = () =>{
    return(
        <div className="about">
            <NextSeo
                title="Meet the Team behind the Best Holidays Provider | About Wayfare Holiday"
                description="Meet the team behind the best vacation provider in TamilNadu."
                canonical="https://www.wayfareholidays.com/"
                keywords="hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai"
                openGraph={{
                url: 'https://www.wayfareholidays.com/about',
                title: 'Wayfare Holiday - Privacy Policy',
                description: 'Meet the team behind the best vacation provider in TamilNadu.',
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
            {/* <Parallax bgImage={ImageUrl} blur={{ min: -1, max: 5 }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: 400 }}>
                    <h1 className="shadow-lg">About Us</h1>
                </div>
            </Parallax> */}
            <Parallax strength={500} height={500}>
                <Background className="custom-bg">
                    <div
                    style={{
                        height: 2000,
                        width: "100vw",
                        backgroundImage: "url('/about.jpg')"
                    }}
                    />
                </Background>
                <div className="d-flex justify-content-center align-items-center" style={{height:350}}>
                    <h1 className="shadow p-3">About Us</h1>
                </div>
            </Parallax>
            <Container>
                <div>
                    <p className="text-justify fs-5 lh-lg mt-5">Welcome to Wayfare Holidays, the right platform to reach your
destination. We are one of the biggest upcoming travel guidance
platforms in India which puts you first at every point. Our organization
was conceived in 2022 and headquartered in Tamilnadu. With a solid
ground in Inbound Tourism and a passion for customer satisfaction,
we offer the most dependable solution for your craze for traveling. We
in Wayfare Holidays consciously strive toward providing a simple and
seamless experience from bookings to check-ins. It doesn&#39;t matter
who you are, where you are from, and how far your destination is, we
consistently offer the best-in-class support at every point. Travel is
one of the greatest pleasures and it is all about freedom to explore.
You can find the exact meaning of it with Wayfare Holidays. As being
one of the best travel guidance platforms in India, we guide you and
make sure you get the best value for money experience. In ought to
that we are providing DIY (Do-It-Yourself) packages. Seemingly, we
let you customize your travel packages as you wish. So, the chance of
exploring the world&#39;s wonders is made possible at your pocket-friendly
price. As a well-expertise company in Inbound Tourism, we guide you
to explore some of the iconic places around Chennai, Tamilnadu,
Kerala, Karnataka, and India. We believe that travel is a force for good
and it can bring good into the world. In that way, Wayfare Holidays is
good in assuring good travel for everyone from anywhere. Of course,accommodation and transportation are two prominent factors that
have more significance in travel. In Wayfare Holidays we assure you
get the best-in-class Accommodations, Transportation, Visa, and
escorted guide from check-ins till checkouts. We show no bias
towards any hotel. So you can choose your comfort zone on your own.
Moreover, our confidence towards assurance is that our company is
taken care of by tourism professionals who have a strong grounded
passion for tourism. Our aim is to make travel affordable and possible
for anyone from anywhere to everywhere.</p>
                </div>
                {/* <ContactForm/> */}
            </Container>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default AboutUs