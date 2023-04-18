import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const AddCourse = () => {
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
    <Card.Header as="h5" style={{textAlign: "center"}}>Thêm khóa học</Card.Header>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Course ID"
            defaultValue="CO2011"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Course name"
            defaultValue="Lap trinh nang cao"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button style={{marginLeft: "45%"}} type="submit">Submit form</Button>
    </Form>
    </Card.Body>
    </Card>
  );
}
export default AddCourse