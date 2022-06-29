import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { Row,Card, Col, Container } from "react-bootstrap"
import TestimonialImg from "./Images/testimonial.png"
import TestimonialAnoImg from "./Images/testimonial3.png"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

const TestimonialPage = ()=>{
    return(
        <div>
            <NavBar/>
            <div className="py-5">
                <h1 className="text-center text-primary">Testimonial</h1>
                <p className="text-primary text-center">Know what people say about us</p>
            </div>
            <hr/>
            <Container>
                <h2 className="text-center p-3 py-5 text-primary">Featured Reviews about Us</h2>
                <Row>
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
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>md amris</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Wayfare are doing customized packages with great service.
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

            <hr className="p-3"/>

            <h3 className="text-center p-3"> 
                <a className="text-decoration-none text-success" href="https://g.page/r/CSxJBUxLAvBdEAI/review" target="_blank" rel="noopener noreferrer">
                    Be one of them to share your experience with us  <FaArrowRight/>
                </a>
            </h3>

            <hr className="p-3"/>

            <Row>
                <Col md={6} className="p-3" sm={1}>
                    <Image
                        className="image"
                        src={TestimonialAnoImg}
                        loading="lazy"
                        height={500}
                        width={500}
                        alt="Best corporate Travel planner in chennai"
                    />
                </Col>
                <Col md={6} sm={1}>
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>Jose Kurian</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Customized tour packages to suit everyone&apos;s individual preference.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>yogesh yogi</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Value for money. Best service. 👍
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <p>ashwin ash</p>
                                        <p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                Good experience 👍🏻.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}
export default TestimonialPage