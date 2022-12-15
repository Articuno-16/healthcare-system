// bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';

import '../CSS/login.css';
// import {StoreContext} from '../components/Context/Store'

const Login = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password,
        };
        console.log(sendData);
        axios.post('http://localhost/api/login/', sendData)
            .then((result) => {
                // console.log(result);
                if (result.data.Status === '200') {
                    window.localStorage.setItem('email', result.data.email);
                    window.localStorage.setItem( 'username', result.data.lastname);
                    window.localStorage.setItem( 'id', result.data.id);
                    navigate(`/`);
                    window.location.reload()
                    /* ctx.UserDispatch({
                        type: 'LOGIN',
                        payload: result.data.id
                    }) */
                } else {
                    alert('Invalid User');
                }
            });
    };
    return (
        <div className="py-5">
            <Card className="text-center m-auto my-5" id="login-form">
                <Card.Header>
                    <h3>Login</h3>
                </Card.Header>
                <Card.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                                value={user.email}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={user.password}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='py-3'>
                            <Button variant="primary" type="submit" className="w-100" >Login</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <span>You have not yet account? </span>
                    <Link to="/register">Register Now</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};
export default Login;
