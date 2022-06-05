import React from "react"
import ContactForm from "./components/contact"
import Footer from "./components/footer"
import NavBar from "./components/navbar"

const ContactPage = () =>{
    return(
        <div>
            <NavBar/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default ContactPage