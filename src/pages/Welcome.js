import React from 'react'

import {Col, Container, Row } from 'react-bootstrap';
import {FaCheck} from 'react-icons/fa';

import welcome1 from '../assets/images/welcome1.png';
import welcome2 from '../assets/images/welcome2.png';

// css
import '../CSS/home.css'

export default function Welcome() {
  return (
    <div className='welcome-docmed-area'>
      <Container>
        <Row >
          <Col>
          <div className='welcome-thumb'>
          <div className="thumb-image-1">
            <img className='image-1' src={welcome1} alt='welcome-img-1'></img>
          </div>
          <div className='thumb-image-2 d-none d-lg-block'>
            <img className='image-2' src={welcome2} alt='welcome-img-2' />
          </div>
          </div>
          </Col>

          <Col>
          <div className='welcome-content py-3'>
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
            <button className='btn btn-outline-primary'>Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
