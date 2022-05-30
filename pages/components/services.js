import { Container,Card, Col, Row } from "react-bootstrap"
import Link from "next/link"
import {MdOutlineFlightTakeoff, MdFastfood} from "react-icons/md"
import { FaCcVisa,FaHotel } from "react-icons/fa";
import {AiFillCar} from "react-icons/ai"

const Services = ()=>{
    return(
        <div className="p-5 text-center mx-auto">
            <h1 className="text-primary">Our Services</h1>
            <br/>
            <p style={{color:"#80C271"}}>Duis laborum sint aliqua incididunt non. Esse et ut deserunt minim eiusmod. Dolore ex est nulla sunt do pariatur sunt qui elit sunt ex.</p>
            <br/>
            {/* <Link href="#contact">
                <button className="btn btn-outline-light px-4 py-2">
                    See Vlogs
                </button>
            </Link> */}
            <Row sm={1} md={3} className="py-2">
                <Col>
                    <MdOutlineFlightTakeoff className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">AirTicket</h6>
                </Col>
                <Col>
                    <AiFillCar className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Travels</h6>
                </Col>
                <Col>
                    <FaCcVisa  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Visa</h6>
                </Col>
                <Col>
                    <FaHotel  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Accomodation</h6>
                </Col>
                <Col>
                    <MdFastfood  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Food</h6>
                </Col>
            </Row>
        </div>
    )
}

export default Services