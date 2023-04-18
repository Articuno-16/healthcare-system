import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const Members = () => {
    return(
        <div className='members' style={{margin: "0 250px"}}>
            <Container>
                <Row>
                    <Col>Lap Trinh Nang Cao</Col>
                    <Col>CO2011</Col>
                    <Col>Giang vien: Thuan</Col>
                </Row>
            </Container>
            <Link to="/courses/classlist/members/grade"><Button variant="success"  style={{marginTop: "20px"}}>Thêm điểm</Button></Link>
        <Table striped bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Grade</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2120015</td>
          <td>Dat</td>
          <td>Huynh Tan</td>
          <td><Link to="/courses/classlist/members/grades"><Button variant="info">See</Button></Link></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    );
}

export default Members