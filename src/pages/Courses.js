import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Courses = () => {
    return(
        
        <div className='courses' style={{margin: "0 250px"}}>
            <Link to="/courses/addcourse"><Button variant="success"  style={{marginTop: "20px"}}>Thêm khóa học</Button></Link>
        <Table striped bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Class List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CO2124</td>
          <td>Lap trinh nang cao</td>
          <td><Link to="/courses/classlist"><Button variant="info">See</Button></Link></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    );
}

export default Courses