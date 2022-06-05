import Image from "next/image"
import { Card, Col, Row } from "react-bootstrap"
import TestimonialImg from "../Images/rating.jpg"

const Testimonials = ()=>{
    return(
        <div>
            <h3 className="text-primary text-center p-5">Testimonials</h3>
            <Row>
                <Col md={6} sm={1}>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx} className="p-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
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