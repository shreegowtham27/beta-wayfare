import {Container,Col,Row} from "react-bootstrap"
import Image from "next/image"
import BannerPic from "../Images/luca-bravo.jpg"
import BGPic from "../Images/Logo.png"
import Link from "next/link"

const Header=()=>{
    return(
        <Container>
            <Row>
                <Col md={6} className="p-3"> 
                    <h1 className="text-center p-2">Travel to Your Dream Destination</h1>
                    <p>Say hello to the world with us. Wayfare Holidays, the company that strives to cherish your travelling experience. We strive to deliver our customers with the simple and seamless experience from bookings to check ins. Broaden your horizon and feel the force of travelling goodness with us. Bookmark us for your every vacation.</p>
                    <Link href="#contact">
                        <button className="btn btn-primary px-5 py-2 text-center text-white p-5" href="#contact">Reserve Ticket</button>
                    </Link>
                </Col>
                <Col md={6}>
                    <Image
                        src={BannerPic}
                        alt="Scenary"
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default Header