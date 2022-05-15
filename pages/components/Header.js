import {Container,Col,Row} from "react-bootstrap"
import Image from "next/image"
import BannerPic from "../Images/luca-bravo.jpg"
import BGPic from "../Images/Logo.png"

const Header=()=>{
    return(
        <Container>
            <Row className="bg-image" style={{backgroundImage:`url(${BannerPic})`}}>
                <Col md={6} className="p-3"> 
                    <h1 className="text-center p-2">Travel to Your Dream Destination</h1>
                    <p>Laborum culpa ea in veniam laboris cupidatat reprehenderit dolore commodo proident minim. Excepteur deserunt proident eiusmod culpa ut exercitation commodo exercitation in ullamco ullamco ullamco. Laborum reprehenderit ipsum eu ut culpa ullamco quis proident proident culpa incididunt. Anim dolore culpa fugiat voluptate do pariatur non enim. Sunt aliquip Lorem eiusmod quis nostrud exercitation laborum non esse fugiat ullamco. Cupidatat elit aliqua voluptate ipsum labore officia minim enim tempor sint reprehenderit.</p>
                    <button className="btn btn-primary px-5 py-2 text-center text-white p-5">Reserve Ticket</button>
                    {/* <Image
                        src={BannerPic}
                        alt="Scenary"
                    /> */}
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