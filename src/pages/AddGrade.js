import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const AddGrade = () => {
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
    <Card.Header as="h5" style={{textAlign: "center"}}>Nhập điểm cho sinh viên</Card.Header>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Student ID</Form.Label>
          <Form.Control 
            required
            type="text"
            placeholder='student id'
          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Course ID</Form.Label>
          <Form.Control 
            required
            type="text"
            placeholder='course id'
          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Class</Form.Label>
          <Form.Control 
            required
            type="text"
            placeholder='class'
          />

        </Form.Group>
    </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Assignment 30%</Form.Label>
          <Form.Control 
            required
            type="number"
            defaultValue="0.0"
          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Midterm 20%</Form.Label>
          <Form.Control
            required
            type="number"
            defaultValue="0.0"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Final 50%</Form.Label>
          <Form.Control
            required
            type="number"
            defaultValue="0.0"
          />
        </Form.Group>
      </Row>
      <Button style={{marginLeft: "45%"}} type="submit">Submit form</Button>
    </Form>
    </Card.Body>
    </Card>
  );
}
export default AddGrade