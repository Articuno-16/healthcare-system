// bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const textcss = {
    textAlign: 'left'
}
const Login = () => {
 let navigate = useNavigate();
  const [user, setUser] = useState({email: '', password: ''});
 const handleChange = (e) =>{
       setUser({...user, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  const sendData = {
    email:user.email,
    password:user.password
  }
  console.log(sendData);
  axios.post('http://localhost/healthcarePHP/login.php', sendData).then((result) => {
    if (result.data.Status === '200'){
     window.localStorage.setItem('email', result.data.email);
     window.localStorage.setItem('username', result.data.lastname);
      navigate(`/`);
      window.location.reload();
    }
    else {
      alert('Invalid User');
    }
  })

}
    return (
        <Card style={{width: '50%', margin: '100px auto'}} className="text-center">
        <Card.Header><h3>Login</h3></Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group style={textcss} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"  onChange={handleChange} value={user.email} />
      </Form.Group>

      <Form.Group style={textcss} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} value={user.password} />
      </Form.Group>
      <Form.Group style={textcss} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </Card.Body>
        <Card.Footer className="text-muted">You have not yet account <Link to="/register">Register Now</Link></Card.Footer>
      </Card>
    );
}
export default Login