import { useState } from 'react';
import Head from 'next/head';
import { Form,Button, Container, Col, Row } from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import {AiTwotoneMail} from "react-icons/ai"
import {FaLongArrowAltRight} from "react-icons/fa"
import NavBar from './components/navbar';
import Footer from './components/footer';
import { NextSeo } from 'next-seo';


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            destination,
            phone,
            city
        };

        const response = await fetch("/api/contact",{
                method:'post',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        const responseData = await response.json()

        console.log(responseData)

        if (parseInt(responseData.successCode) === 200){(
            toast.success(responseData.body,{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )}else{
            console.log(responseData.body)
            toast.error(responseData.body,{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    };

    return (
        <SSRProvider>
            <NextSeo 
                title="Contact The best International and Domestic Holiday provider in TamilNadu | Wayfare Holidays"
                description="We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service."
                canonical="https://www.wayfareholidays.com/"
                keywords="hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai"
                openGraph={{
                url: 'https://www.wayfareholidays.com/',
                title: 'Contact The best International and Domestic Holiday provider in TamilNadu | Wayfare Holidays',
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
            <div id="contact"  className="bg-secondary p-3">
                <main>
                    <Container>
                            <h3 className="text-center mt-5">Let&#39;s plan the Trip</h3>
                            <Row className="justify-content-md-center align-items-center">
                                <Col md={6}>
                                    <div style={{borderRadius:"25px 5px 25px 5px",borderStyle:"groove"}} className="text-center bg-primary font-weight-bold py-5 shadow">
                                        <p className="p-4 text-center font-weight-bold">
                                            <FaPhoneAlt size={30} color="#fff"/>
                                            <a className="text-white px-2" href="tel:+919789680610">+91 9789680610</a>
                                        </p>
                                        <p className="p-4">
                                            <AiTwotoneMail size={30} color="#fff"/>
                                            <a className="text-white px-2" href="mailto:someone@example.com">info@wayfareholidays.com</a>
                                        </p>
                                        <p className="p-4">
                                            <FaMapMarkerAlt size={30} color="#fff"/>
                                            <a className="text-white px-2" href="#">Chennai</a>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} className="p-4">
                                    <Form onSubmit={handleSubmit} className="shadow-sm p-5 mb-3 bg-body rounded">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Enter Your Name" />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                                            <Form.Text className="text-muted">
                                                We&apos;ll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" onChange={e => setPhone(e.target.value)} placeholder="Enter Your Phone Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>City of Residence</Form.Label>
                                            <Form.Control type="text" onChange={e => setCity(e.target.value)} placeholder="Enter Your Current City" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Travel Destination</Form.Label>
                                            <Form.Control type="text" onChange={e => setDestination(e.target.value)} placeholder="Enter Your Destination City" />
                                        </Form.Group>

                                        <Button variant="primary" className="d-block mx-auto px-5" size="lg" type="submit">
                                            Let&#39;s Fly
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                            {/* <a href="/contact" style={{textAlign: 'end', fontSize:'20px'}} className="d-block my-3 font-weight-bold text-primary text-decoration-none">Know Our Location <FaLongArrowAltRight/></a> */}
                        <ToastContainer />
                    </Container>
                </main>
            </div>
            <Footer/>
        </SSRProvider>
    );
}
