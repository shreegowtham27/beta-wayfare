import { Container,Card, Col, Row } from "react-bootstrap"
import Link from "next/link"
import {MdOutlineFlightTakeoff, MdFastfood} from "react-icons/md"
import { FaCcVisa,FaHotel } from "react-icons/fa";
import {AiFillCar} from "react-icons/ai"
import { GiPikeman, GiRollingSuitcase } from "react-icons/gi";
import { RiShieldCrossFill } from "react-icons/ri";

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
                    <h6 className="mt-4 font-weight-bold text-primary">Air Ticketing</h6>
                </Col>
                <Col>
                    <FaHotel  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Hotels</h6>
                </Col>
                <Col>
                    <GiRollingSuitcase className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Land Packages</h6>
                </Col>
            </Row>
            <Row sm={1} md={3} className="py-2 mt-5">
                <Col>
                    <AiFillCar className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Transportation</h6>
                </Col>
                <Col>
                    <GiPikeman className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Guided Tours</h6>
                </Col>
                {/* <Col>
                    <FaCcVisa  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Visa</h6>
                </Col> */}

                <Col>
                    <RiShieldCrossFill  className="rounded-circle  p-5 mx-2 bg-secondary text-primary"
                        size={150}
                        color="#fff"
                    />
                    <h6 className="mt-4 font-weight-bold text-primary">Insurance</h6>
                </Col>
            </Row>
        </div>
    )
}

export default Services