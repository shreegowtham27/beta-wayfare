import React from "react"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import { FaCcVisa } from "react-icons/fa"
import {RiShieldCrossFill} from "react-icons/ri"
import {BsCurrencyExchange} from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"
import ContactForm from "./components/contact"

const OurServices  = () =>{
    return(
        <div>
            <NavBar/>
            <h1 className="text-center text-primary p-5">Our Services</h1>
            <Container>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                    <Col sm={1} md={6}>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                    <Col sm={1} md={6}>
                        <Image src="https://source.unsplash.com/random/400x400/?service" width={400} height={400}/>
                    </Col>
                </Row>
                <Row className="bg-white p-5 justify-content-center align-items-center">
                    <Col sm={1} md={6}>
                        <Image src="https://source.unsplash.com/random/400x400/?service" width={400} height={400}/>
                    </Col>
                    <Col sm={1} md={6}>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                </Row>
                <Row className="bg-secondary p-5 justify-content-center align-items-center">
                    <Col sm={1} md={6}>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                    <Col sm={1} md={6}>
                        <Image src="https://source.unsplash.com/random/400x400/?service" width={400} height={400}/>
                    </Col>
                </Row>
                <Row className="p-5 justify-content-center align-items-center">
                    <Col className="" sm={1} md={3}>
                        <FaCcVisa size={200} className="text-primary mx-auto d-block" />
                        <h3 className="text-center p-2">Visa</h3>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                    <Col sm={1} md={3}>
                        <RiShieldCrossFill size={200} className="text-primary mx-auto d-block"/>
                        <h3 className="text-center p-2">Insurance</h3>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                    <Col sm={1} md={3}>
                        <BsCurrencyExchange size={200} className="text-primary mx-auto d-block"/>
                        <h3 className="text-center p-2">Forex Exchanges</h3>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                    <Col sm={1} md={3}>
                        <AiFillCar size={200} className="text-primary mx-auto d-block"/>
                        <h3 className="text-center p-2">Transportation</h3>
                        <p>Consequat magna pariatur culpa fugiat laborum. Non ut nisi sint enim anim labore. Exercitation excepteur ipsum anim deserunt ipsum ad ullamco reprehenderit dolore deserunt in. Minim reprehenderit culpa ullamco in irure voluptate ipsum anim tempor. Incididunt velit est aliqua ullamco culpa amet non aute deserunt.</p>
                    </Col>
                </Row>
            </Container>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
export default OurServices