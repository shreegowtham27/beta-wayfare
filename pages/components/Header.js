import {Container,Col,Row} from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"

const Header=()=>{
    return(
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className="p-3"> 
                        <h1 className="text-center p-2 text-primary">Travel to Your Dream Destination</h1>
                        <p style={{fontSize:'18px'}}>Experience the comfort of hassle-free modern and sustainable travel from bookings to checkins. <br/><br/><span className="text-primary text-center font-weight-bolder d-block"><strong>Enrich your Memories with us.</strong></span></p>
                        <Link href="#contact">
                            <button className="btn px-5 py-2 mt-5 d-block mx-auto text-white p-5" style={{backgroundColor:"#1c3f6e"}} href="#contact">Reserve Ticket</button>
                        </Link>
                    </Col>
                    <Col md={6} style={{filter: 'drop-shadow(30px 40px 4px #badfc4)'}}>
                        <Image
                            src={"/best-travel-experience.jpg"}
                            alt="Scenary"
                            height={400}
                            width={600}
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