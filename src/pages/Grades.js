import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
const Grades = () => {
    return(
        <div className='grades' style={{margin: "50px 250px"}}>
          
            <Container>
                <Row>
                    <Col>Lap Trinh Nang Cao</Col>
                    <Col>CO2011</Col>
                </Row>
                <Row>
                    <Col>Huynh Tan Dat</Col>
                    <Col>2120015</Col>
                </Row>
            </Container>
        <Table striped bordered hover size="sm" style={{marginTop: "20px", textAlign: "center"}}>
      <thead>
        <tr>
          <th>Assignment(30%)</th>
          <th>Midtem(20%)</th>
          <th>Final(50%)</th>
          <th>Average</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10.0</td>
          <td>10.0</td>
          <td>10.0</td>
          <td>10.0</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    );
}

export default Grades