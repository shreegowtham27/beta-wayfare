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
                                <h3 className="text-center p-3">Let’s wayfare the world together.</h3>
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col className="mt-4">
                                        <Image className="rounded" style={{borderRadius:'20px'}} src="/vacation-spots/arch.jpg" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Architecture</h4>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/beach.jpg" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Beach</h4>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai-bridge.jpg" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Bridge</h4>
                                        <p className="text-primary text-center">Chennai,TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/falls-2.JPG" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Falls</h4>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/kerala-culture.jpg" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Kathakali (Cultural Dance)</h4>
                                        <p className="text-primary text-center">Kerala</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/maathur-thottipaalam-kanyakumari.JPG" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Thottipaalam</h4>
                                        <p className="text-primary text-center">kanyakumari, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/mamallapuram.jpg" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Architecture</h4>
                                        <p className="text-primary text-center">Malmallapuram, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/padmanabaswamy-temple.JPG" height={500} width={600} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Architecture</h4>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/pondicherry-beach.jpg" height={500} width={600} loading="eager"/>
                                        <h4 className="text-primary text-center mt-4">pondicherry Beach</h4>
                                        <p className="text-primary text-center">pondicherry</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/falls.JPG" height={500} width={400} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">Architecture</h4>
                                        <p className="text-primary text-center">Place</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/chennai.jpg" height={500} width={400} loading="lazy"/>
                                        <h4 className="text-primary text-center mt-4">LightHouse</h4>
                                        <p className="text-primary text-center">Chennai, TamilNadu</p>
                                    </Col>
                                    <Col className="mt-4">
                                        <Image className="rounded" src="/vacation-spots/Tanjore-periya-kovil.jpg" height={500} width={400} loading="eager"/>
                                        <h4 className="text-primary text-center mt-4">Tanjai Periya Kovil</h4>
                                        <p className="text-primary text-center">Tanjore, TamilNadu</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="hills">
                                <h3 className="text-center p-3"> Lend your ear to the resounding hills.</h3>
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Kodaikanal"/>
                                        <h4 className="text-primary text-center mt-4">Kodaikanal</h4>
                                        <p className="text-primary text-center">Kodaikanal, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Ooty"/>
                                        <h4 className="text-primary text-center mt-4">Ooty</h4>
                                        <p className="text-primary text-center">Ooty, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Yelagiri"/>
                                        <h4 className="text-primary text-center mt-4">Yelagiri</h4>
                                        <p className="text-primary text-center">Yelagiri, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Yercaud"/>
                                        <h4 className="text-primary text-center mt-4">Yercaud</h4>
                                        <p className="text-primary text-center">Yercaud, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Valparai"/>
                                        <h4 className="text-primary text-center mt-4">Valparai</h4>
                                        <p className="text-primary text-center">Valparai, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Kotagiri"/>
                                        <h4 className="text-primary text-center mt-4">Kotagiri</h4>
                                        <p className="text-primary text-center">Kotagiri, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Coonoor"/>
                                        <h4 className="text-primary text-center mt-4">Coonoor</h4>
                                        <p className="text-primary text-center">Coonoor, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Munnar"/>
                                        <h4 className="text-primary text-center mt-4">Munnar</h4>
                                        <p className="text-primary text-center">Munnar, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Vagamon"/>
                                        <h4 className="text-primary text-center mt-4">Vagamon</h4>
                                        <p className="text-primary text-center">Vagamon, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Thekkady"/>
                                        <h4 className="text-primary text-center mt-4">Thekkady</h4>
                                        <p className="text-primary text-center">Thekkady, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Wayand"/>
                                        <h4 className="text-primary text-center mt-4">Wayand</h4>
                                        <p className="text-primary text-center">Wayand, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Coorg"/>
                                        <h4 className="text-primary text-center mt-4">Coorg</h4>
                                        <p className="text-primary text-center">Coorg, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Chikmagalur"/>
                                        <h4 className="text-primary text-center mt-4">Chikmagalur</h4>
                                        <p className="text-primary text-center">Chikmagalur, Tamil Nadu</p>
                                    </Col>
                                
                                    <Col>
                                        <Image className="rounded" width={300} height={300} src="https://source.unsplash.com/random/200x200/?Thenmala"/>
                                        <h4 className="text-primary text-center mt-4">Thenmala</h4>
                                        <p className="text-primary text-center">Thenmala, Tamil Nadu</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="beach">
                                {/* <Sonnet /> */}
                                <h3 className="text-center p-3">Get the wave of happiness.</h3>
                                    <Row xs={1} md={3} className="mx-auto mt-4">
                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Gokarna"/>
                                            <h4 className="text-primary text-center mt-4">Gokarna</h4>
                                            <p className="text-primary text-center">Gokarna, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kanyakumari"/>
                                            <h4 className="text-primary text-center mt-4">Kanyakumari</h4>
                                            <p className="text-primary text-center">Kanyakumari, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Rameshwaram"/>
                                            <h4 className="text-primary text-center mt-4">Rameshwaram </h4>
                                            <p className="text-primary text-center">Rameshwaram , Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kovalam "/>
                                            <h4 className="text-primary text-center mt-4">Kovalam </h4>
                                            <p className="text-primary text-center">Kovalam , Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Goa"/>
                                            <h4 className="text-primary text-center mt-4">Goa</h4>
                                            <p className="text-primary text-center">Goa, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Varkala"/>
                                            <h4 className="text-primary text-center mt-4">Varkala</h4>
                                            <p className="text-primary text-center">Varkala, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Pondicherry"/>
                                            <h4 className="text-primary text-center mt-4">Pondicherry</h4>
                                            <p className="text-primary text-center">Pondicherry, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Andaman"/>
                                            <h4 className="text-primary text-center mt-4">Andaman</h4>
                                            <p className="text-primary text-center">Andaman, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Tharangambadi"/>
                                            <h4 className="text-primary text-center mt-4">Tharangambadi</h4>
                                            <p className="text-primary text-center">Tharangambadi, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Lakshadweep"/>
                                            <h4 className="text-primary text-center mt-4">Lakshadweep</h4>
                                            <p className="text-primary text-center">Lakshadweep, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Poovar Island"/>
                                            <h4 className="text-primary text-center mt-4">Poovar Island</h4>
                                            <p className="text-primary text-center">Poovar Island, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kovalam"/>
                                            <h4 className="text-primary text-center mt-4">Kovalam </h4>
                                            <p className="text-primary text-center">Kovalam , Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Munroe Island"/>
                                            <h4 className="text-primary text-center mt-4">Munroe Island</h4>
                                            <p className="text-primary text-center">Munroe Island, Tamil Nadu</p>
                                        </Col>

                                        <Col>
                                            <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Allepey/Kumarakom"/>
                                            <h4 className="text-primary text-center mt-4">Allepey/Kumarakom</h4>
                                            <p className="text-primary text-center">Allepey/Kumarakom, Tamil Nadu</p>
                                        </Col>
                                    </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="city">
                                <h3 className="text-center p-3">Mege into the magnificence of cityscapes.</h3>
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Chennai"/>
                                        <h4 className="text-primary text-center mt-4">Chennai</h4>
                                        <p className="text-primary text-center">Chennai</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Madurai"/>
                                        <h4 className="text-primary text-center mt-4">Madurai</h4>
                                        <p className="text-primary text-center">Madurai</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Agra"/>
                                        <h4 className="text-primary text-center mt-4">Agra</h4>
                                        <p className="text-primary text-center">Agra</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Goa"/>
                                        <h4 className="text-primary text-center mt-4">Goa</h4>
                                        <p className="text-primary text-center">Goa</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Athirapalli"/>
                                        <h4 className="text-primary text-center mt-4">Athirapalli</h4>
                                        <p className="text-primary text-center">Athirapalli</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Mumbai"/>
                                        <h4 className="text-primary text-center mt-4">Mumbai</h4>
                                        <p className="text-primary text-center">Mumbai</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Delhi"/>
                                        <h4 className="text-primary text-center mt-4">Delhi</h4>
                                        <p className="text-primary text-center">Delhi</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Vishakapattanam"/>
                                        <h4 className="text-primary text-center mt-4">Vishakapattanam</h4>
                                        <p className="text-primary text-center">Vishakapattanam</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Hyderabad"/>
                                        <h4 className="text-primary text-center mt-4">Hyderabad</h4>
                                        <p className="text-primary text-center">Hyderabad</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kochi"/>
                                        <h4 className="text-primary text-center mt-4">Kochi</h4>
                                        <p className="text-primary text-center">Kochi</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Madurai"/>
                                        <h4 className="text-primary text-center mt-4">Madurai</h4>
                                        <p className="text-primary text-center">Madurai</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Mangalore"/>
                                        <h4 className="text-primary text-center mt-4">Mangalore</h4>
                                        <p className="text-primary text-center">Mangalore</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Bhubaneshwar"/>
                                        <h4 className="text-primary text-center mt-4">Bhubaneshwar</h4>
                                        <p className="text-primary text-center">Bhubaneshwar</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Port Balair"/>
                                        <h4 className="text-primary text-center mt-4">Port Balair</h4>
                                        <p className="text-primary text-center">Port Balair</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="culture">
                                <h3 className="text-center p-3">The art of culture at every touch [or] Let’s embrace culture in every touch.</h3>
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kannur"/>
                                        <h4 className="text-primary text-center mt-4">Kannur</h4>
                                        <p className="text-primary text-center">Kannur, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kanyakumari"/>
                                        <h4 className="text-primary text-center mt-4">Kanyakumari</h4>
                                        <p className="text-primary text-center">Kanyakumari, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Rameshwaram"/>
                                        <h4 className="text-primary text-center mt-4">Rameshwaram </h4>
                                        <p className="text-primary text-center">Rameshwaram , TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kovalam "/>
                                        <h4 className="text-primary text-center mt-4">Kovalam </h4>
                                        <p className="text-primary text-center">Kovalam , TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Goa"/>
                                        <h4 className="text-primary text-center mt-4">Goa</h4>
                                        <p className="text-primary text-center">Goa, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Varkala"/>
                                        <h4 className="text-primary text-center mt-4">Varkala</h4>
                                        <p className="text-primary text-center">Varkala, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Pondicherry"/>
                                        <h4 className="text-primary text-center mt-4">Pondicherry</h4>
                                        <p className="text-primary text-center">Pondicherry, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Andaman"/>
                                        <h4 className="text-primary text-center mt-4">Andaman</h4>
                                        <p className="text-primary text-center">Andaman, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Tharangambadi"/>
                                        <h4 className="text-primary text-center mt-4">Tharangambadi</h4>
                                        <p className="text-primary text-center">Tharangambadi, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Lakshadweep"/>
                                        <h4 className="text-primary text-center mt-4">Lakshadweep</h4>
                                        <p className="text-primary text-center">Lakshadweep, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Poovar Island"/>
                                        <h4 className="text-primary text-center mt-4">Poovar Island</h4>
                                        <p className="text-primary text-center">Poovar Island, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kovalam"/>
                                        <h4 className="text-primary text-center mt-4">Kovalam </h4>
                                        <p className="text-primary text-center">Kovalam , TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Munroe Island"/>
                                        <h4 className="text-primary text-center mt-4">Munroe Island</h4>
                                        <p className="text-primary text-center">Munroe Island, TamilNadu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Allepey/Kumarakom"/>
                                        <h4 className="text-primary text-center mt-4">Allepey/Kumarakom</h4>
                                        <p className="text-primary text-center">Allepey/Kumarakom, TamilNadu</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="architecture">
                                {/* <Sonnet /> */}
                                <h3 className="text-center p-3">The celebration of art in every touch.</h3>
                                <Row xs={1} md={3} className="mx-auto mt-4">
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Mahaballipuram"/>
                                        <h4 className="text-primary text-center mt-4">Mahaballipuram </h4>
                                        <p className="text-primary text-center">Mahaballipuram </p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Madurai" alt="Madurai trip providers wayfare Holidays"/>
                                        <h4 className="text-primary text-center mt-4">Madurai</h4>
                                        <p className="text-primary text-center">Madurai</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Thanjavur"/>
                                        <h4 className="text-primary text-center mt-4">Thanjavur</h4>
                                        <p className="text-primary text-center">Thanjavur</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kumbakonam"/>
                                        <h4 className="text-primary text-center mt-4">Kumbakonam</h4>
                                        <p className="text-primary text-center">Kumbakonam</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Khajuraho"/>
                                        <h4 className="text-primary text-center mt-4">Khajuraho</h4>
                                        <p className="text-primary text-center">Khajuraho</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Aurangabad"/>
                                        <h4 className="text-primary text-center mt-4">Aurangabad</h4>
                                        <p className="text-primary text-center">Aurangabad</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Hampi"/>
                                        <h4 className="text-primary text-center mt-4">Hampi</h4>
                                        <p className="text-primary text-center">Hampi</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Gangai Konda Cholapuram"/>
                                        <h4 className="text-primary text-center mt-4">Gangai Konda Cholapuram </h4>
                                        <p className="text-primary text-center">Gangai Konda Cholapuram </p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Kanchipuram"/>
                                        <h4 className="text-primary text-center mt-4">Kanchipuram</h4>
                                        <p className="text-primary text-center">Kanchipuram</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Somnathpura"/>
                                        <h4 className="text-primary text-center mt-4">Somnathpura</h4>
                                        <p className="text-primary text-center">Somnathpura</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Halebeidu"/>
                                        <h4 className="text-primary text-center mt-4">Halebeidu</h4>
                                        <p className="text-primary text-center">Halebeidu</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Belur"/>
                                        <h4 className="text-primary text-center mt-4">Belur</h4>
                                        <p className="text-primary text-center">Belur</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Jaipur"/>
                                        <h4 className="text-primary text-center mt-4">Jaipur</h4>
                                        <p className="text-primary text-center">Jaipur</p>
                                    </Col>
                                    <Col>
                                        <Image width={300} height={300} src="https://source.unsplash.com/random/300x300/?Agra"/>
                                        <h4 className="text-primary text-center mt-4">Agra</h4>
                                        <p className="text-primary text-center">Agra</p>
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