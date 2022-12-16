import { Col, Card, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import dpm1 from '../../assets/images/dpm1.png';
import dpm2 from '../../assets/images/dpm2.png';
import dpm3 from '../../assets/images/dpm3.png';
import dpm4 from '../../assets/images/dpm4.png';
import dpm5 from '../../assets/images/dpm5.png';
import dpm6 from '../../assets/images/dpm6.png';

export default function AreaDepartments() {
    return (
        <div className="our-department-area">
            <Container>
                <div className="text-center w-50 m-auto">
                    <h2 className="py-3">Our Departments</h2>
                    <p> Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing. </p>
                </div>
                <Row>
                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="eye-care">
                            <Card.Img variant="top" src={dpm1} />
                            <Card.Body>
                                <Card.Title>
                                    <a style={{ color: 'black', textDecoration: 'none', }} href="/"> Eye Care </a>
                                </Card.Title>
                                <Card.Text> Esteem spirit temper too say adieus who direct esteem. </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="physical-therapy">
                            <Card.Img variant="top" src={dpm2} />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        href="/physicaltherapy"
                                    >
                                        Physical Therapy
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    Esteem spirit temper too say adieus who
                                    direct esteem.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="dental-care">
                            <Card.Img variant="top" src={dpm3} />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        href="/dentalcare"
                                    >
                                        Dental Care
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    Esteem spirit temper too say adieus who
                                    direct esteem.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="diagnostic-dest">
                            <Card.Img variant="top" src={dpm4} />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        href="/diagnostic-dest"
                                    >
                                        Diagnostic Test
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    Esteem spirit temper too say adieus who
                                    direct esteem.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="skin-surgery">
                            <Card.Img variant="top" src={dpm5} />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        href="/skin-surgery"
                                    >
                                        Skin Surgery
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    Esteem spirit temper too say adieus who
                                    direct esteem.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="py-md-3 py-2">
                        <Card className="surgery-service">
                            <Card.Img variant="top" src={dpm6} />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        href="/surgery-service"
                                    >
                                        Surgery Service
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    Esteem spirit temper too say adieus who
                                    direct esteem.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
