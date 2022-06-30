import Image from "next/image"
import { Card, Col, Row } from "react-bootstrap"
import TestimonialImg from "../Images/testimonial.png"

const Testimonials = ()=>{
    return(
        <div>
            <h3 className="text-primary text-center p-5">Testimonials</h3>
            <Row className="justify-content-center align-items-center">
                <Col md={6} sm={1}>
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>iRocky Creations</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Our trip to Resort Beach  through Wayfare holidays was well planned and properly organised by Mr.Ashwin Kumar.
                                The overall experience was good and satisfying.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>Star Live</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Ashwin helped us end to end in our travel trip to Thailand, starting from home to reaching back home, he has taken care of every step. I will truly recommend Wayfare Holidays for your trips.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Col>
                <Col md={6} sm={1}>
                    <Image
                        className="image"
                        src={TestimonialImg}
                        loading="lazy"
                        height={500}
                        width={500}
                        alt="Best corporate Travel planner in chennai"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Testimonials