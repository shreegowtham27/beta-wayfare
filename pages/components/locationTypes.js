import React from "react"
import Image from "next/image"
import { Nav,Tab,Row,Col,Sonnet } from "react-bootstrap"

const LocationTypes=()=>{
    return(
        <div className="py-5">
            <h2 className="text-primary p-3 text-center">Destinations as you planned</h2>
            <Tab.Container id="right-tabs" defaultActiveKey="all">
                <Row>
                    <Col lg={12}>
                        <Nav variant="pills" className="flex-row justify-content-center p-3 mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="all">All Locations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="hills">Hills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="beach">Beaches</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="desert">Deserts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="all">
                                {/* <Sonnet /> */}
                                <p>Ullamco magna aute ea laborum labore. Consequat deserunt ad occaecat commodo non duis. Ullamco enim aliquip in eiusmod laboris excepteur aliqua voluptate ea velit. Cupidatat ex officia eu excepteur ex voluptate esse dolor fugiat nulla laborum sunt.</p>
                                <Row>
                                    <Col><Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?beach"/></Col>
                                    <Col><Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?desert"/></Col>
                                    <Col><Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?hills"/></Col>
                                    <Col><Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?city"/></Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="hills">
                                {/* <Sonnet /> */}
                                <p>Enim aliqua dolor officia laboris proident dolore quis excepteur laboris esse duis laboris. Magna ex duis in culpa. Cillum qui ullamco laboris officia mollit magna. Magna velit ut magna do consectetur nulla Lorem dolor minim ut incididunt. Anim cillum aute sit proident cillum pariatur officia esse et. Nisi proident nulla consequat magna.</p>
                                    <Row>
                                        <Col>
                                            <Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?hills"/>
                                        </Col>
                                    </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="beach">
                                {/* <Sonnet /> */}
                                <p>Ullamco magna aute ea laborum labore. Consequat deserunt ad occaecat commodo non duis. Ullamco enim aliquip in eiusmod laboris excepteur aliqua voluptate ea velit. Cupidatat ex officia eu excepteur ex voluptate esse dolor fugiat nulla laborum sunt.</p>
                                    <Row>
                                        <Col>
                                            <Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?beach,5"/>
                                        </Col>
                                    </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="desert">
                                {/* <Sonnet /> */}
                                <p>Enim aliqua dolor officia laboris proident dolore quis excepteur laboris esse duis laboris. Magna ex duis in culpa. Cillum qui ullamco laboris officia mollit magna. Magna velit ut magna do consectetur nulla Lorem dolor minim ut incididunt. Anim cillum aute sit proident cillum pariatur officia esse et. Nisi proident nulla consequat magna.</p>
                                <Row>
                                    <Col>
                                        <Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?desert"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default LocationTypes