import { useState } from 'react';
import Head from 'next/head';
import { Form,Button, Container, Col, Row } from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {FaPhoneAlt} from "react-icons/fa"
import {AiTwotoneMail} from "react-icons/ai"
import {FaLongArrowAltRight} from "react-icons/fa"
import Link from 'next/link';


export default function ContactForm() {
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
            <div id="contact"  className="bg-secondary p-3">
                <main>
                    <Container>
                            <h3 className="text-center mt-5">Let&#39;s plan the Trip</h3>
                            <Row className="justify-content-md-center align-items-center h-75">
                                <Col md={6}>
                                    <div style={{borderRadius:"25px 5px 25px 5px",borderStyle:"groove"}} className="text-center bg-primary font-weight-bold py-5 shadow">
                                        <p className="p-4 text-center font-weight-bold">
                                            <FaPhoneAlt size={30} color="#fff"/>
                                            <a title="Wayfare Holidays Contact Number" className="text-white px-2" href="tel:+919360926290">+91 9360926290</a>
                                        </p>
                                        <p className="p-4">
                                            <AiTwotoneMail size={30} color="#fff"/>
                                            <a title="Email to Wayfare Holidays" className="text-white px-2" href="mailto:someone@example.com">info@wayfareholidays.com</a>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} className="p-4">
                                    <Form onSubmit={handleSubmit} className="shadow-sm p-5 mb-3 bg-body rounded">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Enter Your Name"  required min="2"/>
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email Address" required min="5"/>
                                            <Form.Text className="text-muted">
                                                We&apos;ll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" onChange={e => setPhone(e.target.value)} placeholder="Enter Your Phone Number" required min="10" max="10"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>City of Residence</Form.Label>
                                            <Form.Control type="text" onChange={e => setCity(e.target.value)} placeholder="Enter Your Current City" required min="2" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Travel Destination</Form.Label>
                                            <Form.Control type="text" onChange={e => setDestination(e.target.value)} placeholder="Enter Your Destination City"  required min="2"/>
                                        </Form.Group>

                                        <Button variant="primary" className="d-block mx-auto px-5" size="lg" type="submit">
                                            Let&#39;s Fly
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                            <div style={{textAlign: 'end', fontSize:'20px'}} className="d-block my-3 font-weight-bold text-primary text-decoration-none">
                                <Link style={{textDecoration:"none"}} href="/contact-us">Know Our Location</Link><FaLongArrowAltRight/>
                            </div>
                        <ToastContainer />
                    </Container>
                </main>
            </div>
        </SSRProvider>
    );
}
