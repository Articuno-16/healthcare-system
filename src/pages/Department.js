//images
import testmonial1 from '../assets/images/testmonial1.png';
import testmonial2 from '../assets/images/testmonial2.png';


//bootrap
import { Carousel } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// component
import HomeSlick from '../components/section/homeSlickSlider';

import BusinessTab from '../components/layout/BusinessTab';
// css
import '../CSS/home.css'
// icons
import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';
import Welcome from './Welcome';
import AreaDepartments from './Areas/AreaDepartments';
import AreaServices from './Areas/AreaServices';
import AreaEmergency from './Areas/AreaEmergency';
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
    <AreaServices />
    <Welcome />
    <AreaDepartments/>
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
      <HomeSlick />
    </div>
    <AreaEmergency />
    </div>
    );
}
export default Department