import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const AddClass = () => {
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
    <Card.Header as="h5" style={{textAlign: "center"}}>Thêm lớp học</Card.Header>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>Course ID</Form.Label>
      <Form.Select aria-label="Default select example" >

      <option value="1">CO2011</option>
      <option value="2">CO2012</option>
      <option value="3">CO2013</option>
    </Form.Select>
    </Form.Group>
   
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Class name"
            defaultValue="L01"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Teacher Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Teacher"
            defaultValue="Thuan"
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
export default AddClass