import Table from 'react-bootstrap/Table';

const StudentDetail = () => {
    return(
        <div className='student_detail'>
            <h1>Thông tin chi tiết sinh viên</h1>
            <p>Tên: Huynh Tan Dat</p>
            <p>Mssv: 2120015</p>

        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Tên khóa học</th>
          <th>Lớp</th>
          <th>Giảng viên</th>
          <th>Điểm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lap trinh nang cao</td>
          <td>L04</td>
          <td>Thuan</td>
          <td>10.0</td>
        </tr>
      </tbody>
    </Table>
    </div>
    );
}

export default StudentDetail