import {Container,Col,Row} from "react-bootstrap"
import Image from "next/image"
import BannerPic from "../Images/luca-bravo.jpg"
import BGPic from "../Images/Logo.png"
import Link from "next/link"

const Header=()=>{
    return(
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className="p-3"> 
                        <h1 className="text-center p-2 gradient-text">Travel to Your Dream Destination</h1>
                        <p style={{fontSize:'16px'}}>Experience the comfort of hassle-free modern and sustainable travel from bookings to checkins. <br/><br/><span className="gradient-text font-weight-bolder"><strong>Explore the charm of exploration with us.</strong></span></p>
                        <Link href="#contact">
                            <button className="btn btn-primary px-5 py-2 d-block mx-auto text-white p-5" href="#contact">Reserve Ticket</button>
                        </Link>
                    </Col>
                    <Col md={6} style={{filter: 'drop-shadow(30px 40px 4px #badfc4)'}}>
                        <Image
                            src={BannerPic}
                            alt="Scenary"
                        />
                    </Col>
                </Row>
            </Container>
            <div id="seperator" className="h-100">
                <br/>
                <br/>
            </div>
        </div>
    )
}
export default Header