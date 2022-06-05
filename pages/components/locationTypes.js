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
                                <Nav.Link eventKey="city">Cityscape</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="culture">Culture</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="architecture">Architecture</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="all">
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col className="mt-4">
                                        <Image className="rounded" style={{borderRadius:'20px'}} src="/vacation-spots/arch.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Architecture</h3>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/beach.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Beach</h3>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai-bridge.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Bridge</h3>
                                        <p className="text-primary text-center">Chennai,TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/falls-2.JPG" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Falls</h3>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/kerala-culture.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Kathakali (Cultural Dance)</h3>
                                        <p className="text-primary text-center">Kerala</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/maathur-thottipaalam-kanyakumari.JPG" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Thottipaalam</h3>
                                        <p className="text-primary text-center">kanyakumari, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/mamallapuram.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Architecture</h3>
                                        <p className="text-primary text-center">Malmallapuram, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/padmanabaswamy-temple.JPG" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Architecture</h3>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/pondicherry-beach.jpg" height={500} width={600} loading="eager"/>
                                        <h3 className="text-primary text-center mt-4">pondicherry Beach</h3>
                                        <p className="text-primary text-center">pondicherry</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/falls.JPG" height={500} width={400} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Architecture</h3>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai.jpg" height={500} width={400} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">LightHouse</h3>
                                        <p className="text-primary text-center">Chennai, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/Tanjore-periya-kovil.jpg" height={500} width={400} loading="eager"/>
                                        <h3 className="text-primary text-center mt-4">Tanjai Periya Kovil</h3>
                                        <p className="text-primary text-center">Tanjore, TamilNadu</p>
                                    </Col>
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
                            <Tab.Pane eventKey="city">
                                <Row sm={1} md={3}>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai.jpg" height={500} width={400} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">LightHouse</h3>
                                        <p className="text-primary text-center">Chennai, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai-bridge.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Bridge</h3>
                                        <p className="text-primary text-center">Chennai,TamilNadu</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="culture">
                                <Row sm={1} md={3}>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/kerala-culture.jpg" height={500} width={600} loading="lazy"/>
                                        <h3 className="text-primary text-center mt-4">Kathakali (Cultural Dance)</h3>
                                        <p className="text-primary text-center">Kerala</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="architecture">
                                {/* <Sonnet /> */}
                                <p>Enim aliqua dolor officia laboris proident dolore quis excepteur laboris esse duis laboris. Magna ex duis in culpa. Cillum qui ullamco laboris officia mollit magna. Magna velit ut magna do consectetur nulla Lorem dolor minim ut incididunt. Anim cillum aute sit proident cillum pariatur officia esse et. Nisi proident nulla consequat magna.</p>
                                <Row>
                                    <Col>
                                        <Image width={200} height={200} src="https://source.unsplash.com/random/200x200/?architecture"/>
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