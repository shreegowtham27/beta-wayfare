import { Col, Row } from "react-bootstrap"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai"
import Link from "next/link"

const Footer = () =>{
    return(
        <footer>
            <div className="footer">
                <Row>
                    <Col>
                        <a href="https://www.facebook.com/Wayfare-Holidays-107585808627384/" target="_blank" rel="noopener noreferrer" className="px-3">
                            <AiFillFacebook size={30}/>
                        </a>
                        <a href="https://www.instagram.com/wayfare_holidays/" target="_blank" rel="noopener noreferrer" className="px-3">
                            <AiFillInstagram size={30}/>
                        </a>
                        <a className="px-3" href="#">
                            <AiFillYoutube size={30}/>
                        </a>
                        <a href="https://twitter.com/HolidaysWayfare" target="_blank" rel="noopener noreferrer" className="px-3">
                            <AiFillTwitterSquare size={30}/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <ul>
                        <li><Link href="/contact-us">Contact us</Link></li>
                        <li><Link href="/our-services">Our Services</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                        <li><a href="">Give us a Feeback</a></li>
                    </ul>
                </Row>

                <Row>
                    <p><a href="https://www.wayfareholidays.com">Wayfare Holidays</a> Copyright © 2022 - All rights reserved</p>
                </Row>
            </div>
        </footer>
    )
}

export default Footer