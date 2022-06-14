import {Navbar,Container,Nav} from "react-bootstrap"
import Image from 'next/image'
import Logo from "../Images/Logo.png"


const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                    <Navbar.Brand href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={150}
                            height={75}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="flex-row justify-content-center text-dark" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/our-services">Services</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            {/* <Nav.Link href="/testimonials">Testimonials</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Nav id="contact-us">
                        <Nav.Link id="float-right-button" href="/contact-us" style={{backgroundColor:"#1c3f6e"}} className="btn text-white px-3">Contact Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar