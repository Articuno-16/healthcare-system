import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const AddStudent = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Card style={{width: "50%", margin: "20px auto"}}>
    <Card.Header as="h5" style={{textAlign: "center"}}>Thêm sinh viên</Card.Header>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Label>Course</Form.Label>
      <Form.Select aria-label="Default select example" style={{width: "50%", height: "40px"}}>

      <option value="1">Lap trinh nang cao</option>
      <option value="2">Cong nghe phan mem</option>
      <option value="3">Kiem tra phan mem</option>
    </Form.Select>
    
          <Form.Label>Class</Form.Label>
          <Form.Select aria-label="Default select example" style={{width: "30%", height: "40px"}}>

      <option value="1">L01</option>
      <option value="2">L02</option>
      <option value="3">L03</option>
    </Form.Select>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Do you want to add a new student?"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Card.Body>
    </Card>

  );
}
export default AddStudent