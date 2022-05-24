import { useState } from 'react';
import Head from 'next/head';
import { Form,Button, Container, Col, Row } from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ToastContainer,toast } from 'react-nextjs-toast'


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
            toast.notify(responseData.body,{
                duration: 5,
                type: "success"
            })
        )}else{
            console.log(responseData.body)
            toast.notify(responseData.body,{
                duration: 5,
                type: "error"
            })
        }
    };

    return (
        <SSRProvider>
        <div id="contact">
            <main>
                <Container>
                    <h3 className="text-center mt-5">Let&#39;s plan the Trip</h3>
                    <Row className="justify-content-md-center">
                        <Col md={8}>
                        <Form onSubmit={handleSubmit}>
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
                <ToastContainer />
            </Container>
            </main>
        </div>
            </SSRProvider>
    );
}
