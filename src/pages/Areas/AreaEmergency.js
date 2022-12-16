import React from 'react'
import { Col, Row } from 'react-bootstrap';

export default function AreaEmergency() {
  return (
    <div className='emergency-area'>
        <Row>
          <Col className='emergency-col-1' xs={12} md={6}>
            <Row className='p-5'>
             <Col className='px-3'>
             <h2 style={{fontSize: '20px'}}>For Any Emergency Contact</h2>
              <p>Esteem spirit temper too say adieus.</p>
              </Col>
              <Col className='d-flex align-items-center px-3'>
                <a href='/contact' className="btn btn-83C4FF border-white text-white">+84 366 306 060</a>
              </Col>
            </Row>        
          </Col>

          <Col className='emergency-col-2' xs={12} md={6}>
            <Row className='p-5'>
             <Col>
             <h2 style={{fontSize: '20px'}}>Make an Online Appointment</h2>
              <p>Esteem spirit temper too say adieus.</p>
              </Col>
              <Col className='d-flex align-items-center'>
              <a href='/contact' className="btn btn-83C4FF border-white text-white">Make An Appointment</a>
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  )
}
