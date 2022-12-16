// bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
// react
import {Link} from 'react-router-dom';
import React from 'react'
//axios
import axios from 'axios';
const textcss = {
    textAlign: 'left'
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '', email:'', password:'', passwordConfirm:'', phone_number:'', address:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    const state = this.state
    state[event.target.name] = event.target.value
    this.setState(state);
}
handleSubmit(event) {
  event.preventDefault();

  let formData = new FormData();
  formData.append('firstname', this.state.firstname)
  formData.append('lastname', this.state.lastname)
  formData.append('email', this.state.email)
  formData.append('password', this.state.password)
  formData.append('passwordConfirm', this.state.passwordConfirm)
  formData.append('phone_number', this.state.phone_number)
  formData.append('address', this.state.address)

  axios({
      method: 'post',
      url: 'http://localhost/api/register/',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
      //handle success
      console.log(response)
   
      alert('You Registered Successfully'); 
      
      
  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });

}
render() {
  return (
   
        <Card style={{margin: '50px auto'}} className="text-center w-50">
        <Card.Header><h3>Register</h3></Card.Header>
        <Card.Body>
        <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
        <Form.Group style={textcss} as={Col} controlId="formGridCity">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group style={textcss} as={Col} controlId="formGridCity">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
        </Form.Group>
        </Row>
    
        <Form.Group style={textcss} className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group style={textcss} as={Col} controlId="formGridCity">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group style={textcss} as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group style={textcss} as={Col} controlId="formGridPassword">
          <Form.Label>Password Again</Form.Label>
          <Form.Control type="password" placeholder="Password Confirm" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} />
        </Form.Group>
      </Row>

      <Form.Group style={textcss} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name="address" value={this.state.address} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group style={textcss} className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </Card.Body>
        <Card.Footer className="text-muted">Do you have an account? <Link to="/login">Login Now</Link></Card.Footer>
      </Card>
    );
}
}

export default Register