//images

import welcome1 from '../assets/images/welcome1.png';
import welcome2 from '../assets/images/welcome2.png';
import dpm1 from '../assets/images/dpm1.png';
import dpm2 from '../assets/images/dpm2.png';
import dpm3 from '../assets/images/dpm3.png';
import dpm4 from '../assets/images/dpm4.png';
import dpm5 from '../assets/images/dpm5.png';
import dpm6 from '../assets/images/dpm6.png';
import testmonial1 from '../assets/images/testmonial1.png';
import testmonial2 from '../assets/images/testmonial2.png';


//bootrap
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// component
import HomeSlick from '../components/section/homeSlickSlider';

import BusinessTab from '../components/layout/BusinessTab';
// css
import '../CSS/home.css'
// icons
import {FaHospitalAlt} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaMedkit} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';
const Department = () => {
    return (
        <div className="department">
          <div className='banner-department'>
        <h2>Services</h2>
        <p>
        <a style={{color: 'white', textDecoration: 'none'}} href="/home">Home</a>
        / Serviecs
        </p>
       
    </div>
    <div className='area-services' style={{background: '#83C4FF'}}>
    <Container style={{margin: '0 auto', color: 'white'}}>
        <Row >
            <Col>
           <div className='single service-1'>
            <FaHospitalAlt style={{height: '50px', width: '50px'}}></FaHospitalAlt>
          <h2>Hospitality</h2>
          <p>Clinical excellence must be the priority for any health care service provider.</p>
          <a href='/applybed' className="btn btn-83C4FF border-white text-white">Apply For A Bed</a>
          </div>
            </Col>
          
            <Col style={{background: '#5DB2FF'}}>
            <div className='single service-2'>
            <FaPhone style={{height: '50px', width: '50px'}}></FaPhone>
            <h2>Emergency Care</h2>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
            <a href='/contact' className="btn btn-83C4FF border-white text-white">+84 366 306 060</a>
            </div>
            </Col>
        
            <Col>
            <div className='single service-3'>
            <FaMedkit style={{height: '50px', width: '50px'}}></FaMedkit>
            <h2>Chamber Service</h2>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
            <a href='/makeappointment' className="btn btn-83C4FF border-white text-white">Make An Appointment</a>
            </div>
            </Col>
        </Row>
    </Container>
    </div>
    <div className='welcome-docmed-area'>
      <Container>
        <Row >
          <Col>
          <div className='welcome-thumb'>
          <div className="thumb-image-1">
            <img className='image-1' src={welcome1} alt='welcome-img-1'></img>
          </div>
            <div className='thumb-image-2'>
            <img className='image-2' src={welcome2} alt='welcome-img-2'></img>
          </div>
          </div>
          </Col>

          <Col>
          <div className='welcome-content'>
            <h2>Welcome to Docmed</h2>
            <h3>Best Care For Your Good Health</h3>
            <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
            <ul className='welcome-list'>
              <li>
                <FaCheck style={{color: '#5DB2FF', marginRight: '10px'}}></FaCheck>
                 Apartments frequently or motionless.
              </li>
              <li>
                <FaCheck style={{color: '#5DB2FF', marginRight: '10px'}}></FaCheck>
                Duis aute irure dolor in reprehenderit in voluptate.
              </li>
              <li>
                <FaCheck style={{color: '#5DB2FF', marginRight: '10px'}}></FaCheck>
                Voluptatem quia voluptas sit aspernatur.
              </li>
            </ul>
            <button className='btn btn-white border-primary text-primary'>Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='our-department-area'>
      <Container>
        <div className='department-intro'>
        <h2>Our Departments</h2>
        <p>Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing.</p>
        </div>
        <Row style={{margin: '0 90px'}}>
          <Col>
          <Card className='eye-care' style={{ width: '18rem', margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm1} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/eyecare">Eye Care</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card className='physical-therapy' style={{ width: '18rem', margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm2} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/physicaltherapy">Physical Therapy</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card className='dental-care' style={{ width: '18rem' , margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm3} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/dentalcare">Dental Care</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
        
          <Col>
          <Card className='diagnostic-dest' style={{ width: '18rem' , margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm4} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/diagnostic-dest">Diagnostic Test</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card className='skin-surgery' style={{ width: '18rem' , margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm5} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/skin-surgery">Skin Surgery</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card className='surgery-service' style={{ width: '18rem' , margin: '10px 0'}}>
      <Card.Img variant="top" src={dpm6} />
      <Card.Body>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/surgery-service">Surgery Service</a></Card.Title>
        <Card.Text>
        Esteem spirit temper too say adieus who direct esteem.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
          </Col>
          </Row>
        
      </Container>
    </div>
    <div className='testmonial'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testmonial1}
          alt="First slide"
        />
        <Carousel.Caption style={{textAlign: 'center', color: 'white', top: '50%'}}>
          

          <p><FaQuoteLeft></FaQuoteLeft> Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
         
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.<br />
            
            Fusce ac mattis nulla. Morbi eget ornare dui. <FaQuoteRight></FaQuoteRight>
           </p>
          
          <h3 className='author' style={{fontSize: '15px'}}>-ASANA KORIM-</h3>
      
         
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testmonial2}
          alt="Second slide"
        />

<Carousel.Caption style={{textAlign: 'center', color: 'white', top: '50%'}}>
          

          <p><FaQuoteLeft></FaQuoteLeft> Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
         
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.<br />
            
            Fusce ac mattis nulla. Morbi eget ornare dui. <FaQuoteRight></FaQuoteRight>
           </p>
          
          <h3 className='author' style={{fontSize: '15px'}}>-ASANA KORIM-</h3>
      
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testmonial1}
          alt="Third slide"
        />

<Carousel.Caption style={{textAlign: 'center', color: 'white', top: '50%'}}>
          

          <p><FaQuoteLeft></FaQuoteLeft> Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
         
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.<br />
            
            Fusce ac mattis nulla. Morbi eget ornare dui. <FaQuoteRight></FaQuoteRight>
           </p>
          
          <h3 className='author' style={{fontSize: '15px'}}>-ASANA KORIM-</h3>
      
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='business-expert-area'>
    <Tabs style={{background: '#F5FBFF', height: '60px'}}
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="ExcellentServices" title="Excellent Services">
        <BusinessTab />
      </Tab>
      <Tab eventKey="QualifiedDoctors" title="Qualified Doctors">
        <BusinessTab />
      </Tab>
      <Tab eventKey="dEmergencyDepartments" title="Emergency Departments">
        <BusinessTab />
      </Tab>
    </Tabs>
    </div>
    <div className='experts-area'>
    <HomeSlick></HomeSlick>
    </div>
    <div className='emergency-area'>
      <Container>
        <Row>
          <Col className='emergency-col-1'>
          <div className='emergency-contact'>
            <Row>
             <Col>
             <h2 style={{fontSize: '20px'}}>For Any Emergency Contact</h2>
              <p>Esteem spirit temper too say adieus.</p>
              </Col>
              <Col>
              <a href='/contact' className="btn btn-83C4FF border-white text-white">+84 366 306 060</a>
              </Col>
            </Row>
           
          </div>
        
          </Col>

          <Col className='emergency-col-2'>
          <div className='emergency-appointment'>
            <Row>
             <Col>
             <h2 style={{fontSize: '20px'}}>Make an Online Appointment</h2>
              <p>Esteem spirit temper too say adieus.</p>
              </Col>
              <Col>
              <a href='/contact' className="btn btn-83C4FF border-white text-white">Make An Appointment</a>
              </Col>
            </Row>
           
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    );
}
export default Department