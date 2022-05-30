// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import NavBar from "./components/navbar"
import Header from "./components/Header"
import MemoryBlock from "./components/memoryblock"
// import DataFilter from "./components/datafilert"
import LocationTypes from "./components/locationTypes"
import { Container } from "react-bootstrap"
import ContactForm from "./components/contact"
import Footer from "./components/footer"
import Testimonials from "./components/testimonial"
import Services from "./components/services"


export default function Home() {
  return (
    <div>
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
