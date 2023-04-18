import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
const ClassList = () => {
    return(
        <div className='class-list' style={{textAlign: "center"}}>
            <h1>Lap trinh nang cao</h1>
            <Link to="/courses/classlist/addclass"><Button variant="success"  style={{margin: "20px"}}>Thêm lớp học cho khóa học</Button></Link>
        <Table striped bordered hover size="sm" style={{width: "50%", margin: "0 auto"}}>
      <thead>
        <tr>
          <th>Lớp</th>
          <th>Giảng viên</th>
          <th>Danh sách thành viên</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>L04</td>
          <td>Thuan</td>
          <td><Link to="/courses/classlist/members"><Button variant="info">See</Button></Link></td>
        </tr>
      </tbody>
    </Table>
    </div>
    );
}

export default ClassList