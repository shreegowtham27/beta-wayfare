// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import NavBar from "./components/navbar"
import Header from "./components/Header"
import MemoryBlock from "./components/memoryblock"
// import DataFilter from "./components/datafilert"
import LocationTypes from "./components/locationTypes"
import { Container } from "react-bootstrap"
import ContactForm from "./components/contactForm"
import Footer from "./components/footer"
import Testimonials from "./components/testimonial"
import Services from "./components/services"
import { NextSeo } from "next-seo"


export default function Home() {
  return (
    <div>
      <NextSeo
        title="Wayfare Holiday - The best International and Domestic Holiday provider in TamilNadu"
        description="We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service."
        canonical="https://www.wayfareholidays.com/"
        keywords="hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai"
        openGraph={{
          url: 'https://www.wayfareholidays.com/',
          title: 'Wayfare Holiday - The best International and Domestic Holiday provider in TamilNadu',
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
      <br/>
      <Header/>
      <Container className="py-5 px-3">
        <LocationTypes/>
        <Services/>
        <Testimonials/>
      </Container>
      <MemoryBlock/>
      <ContactForm/>
      <Footer/>
      {/* <h1 className='text-center text-primary'>Hello</h1> */}
    </div>
  )
}
