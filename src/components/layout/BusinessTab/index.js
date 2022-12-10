import { Container, Row, Col } from "react-bootstrap";
import business from '../../../assets/images/business.png';
import {FaMedkit} from 'react-icons/fa';
export default function BusinessTab(){
    return (
        <div className="business-tabs">
            <Container>
                <Row>
                    <Col style={{margin: '30px'}}>
                    <FaMedkit style={{color: 'blue', width: '50px', height: '50px'}}></FaMedkit>
                    <h2 style={{fontSize: '20px'}}>Leading edge care for Your family</h2>
                    <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    </Col>
                
                    <Col style={{margin: '30px'}}>
                    <img style={{width: '400px', height: '200px'}} src={business} alt='business'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }