import { Col, Row } from "react-bootstrap"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai"

const Footer = () =>{
    return(
        <footer>
            <div className="footer">
                <Row>
                    <Col>
                        <a className="px-3" href="#">
                            <AiFillFacebook size={30}/>
                        </a>
                        <a className="px-3" href="#">
                            <AiFillInstagram size={30}/>
                        </a>
                        <a className="px-3" href="#">
                            <AiFillYoutube size={30}/>
                        </a>
                        <a className="px-3" href="#">
                            <AiFillTwitterSquare size={30}/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Give us a Feeback</a></li>
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