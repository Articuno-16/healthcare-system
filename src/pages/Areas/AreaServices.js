import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaMedkit} from 'react-icons/fa';

export default function AreaServices() {
  return (
    <div className='area-services' style={{background: '#83C4FF'}}>
    <Container style={{margin: '0 auto', color: 'white'}}>
        <Row >
            <Col md={4} xs={12}>
           <div className='py-4 px-md-4 service-1'>
            <div className='mb-3'>
              <FaHospitalAlt style={{height: '50px', width: '50px'}}></FaHospitalAlt>
            </div>
          <div>
            <h2>Hospitality</h2>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
          </div>
          <Button variant="outline-light">Apply For A Bed</Button>
          </div>
            </Col>
          
            <Col style={{background: '#5DB2FF'}} md={4} xs={12}>
            <div className='py-4 px-md-4 service-2'>
            <div className='mb-3'><FaPhone style={{height: '50px', width: '50px'}}></FaPhone></div>
            <div>
              <h2>Emergency Care</h2>
              <p>Clinical excellence must be the priority for any health care service provider.</p>
            </div>
            <a href='/contact' className="btn btn-83C4FF border-white text-white">+84 366 306 060</a>
            </div>
            </Col>
        
            <Col md={4} xs={12}>
            <div className='py-4 px-md-4 service-3'>
            <div className='mb-3'><FaMedkit style={{height: '50px', width: '50px'}}></FaMedkit></div >
            <div>
              <h2>Chamber Service</h2>
              <p>Clinical excellence must be the priority for any health care service provider.</p>
            </div>
            <a href='/makeappointment' className="btn btn-83C4FF border-white text-white">Make An Appointment</a>
            </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
