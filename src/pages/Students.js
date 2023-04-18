import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Students = () => {
    return(
        <div className='students' style={{margin: "0 250px"}}>
            <Link to="/students/addstudent"><Button variant="success"  style={{marginTop: "20px"}}>Thêm sinh viên</Button></Link>
        <Table striped bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2120015</td>
          <td>Dat</td>
          <td>Huynh Tan</td>
          <td>tandat@gmail.com</td>
          <td><Link to="/students/detail"><Button variant="info">See</Button></Link></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    );
}

export default Students