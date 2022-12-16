import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AccountManage({props}) {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        localStorage.clear();
        window.location.reload();
    };
    const handleChange = props.handleChange

    return (
        <Container className="m-auto py-5">
            <div className="py-md-3">
                <div className="row">
                    <h2 className="col-8">Account Manage</h2>
                    <div className="col-4 d-flex align-items-center justify-content-end">
                        <Button variant="warning" className="w-75" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
                <Link to="/schedule">Manage your schedule here</Link>
            </div>

            <Form className="py-3" onSubmit={props.handleSubmit}>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            value={props.info.firstname ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            value={props.info.lastname ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={props.info.email ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone_number"
                            onChange={handleChange}
                            value={props.info.phone_number ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                            <option value={props.info.gender}>{props.info.gender}</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Orther</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6 col-md-3">
                        <Form.Label>Day of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            name="birthday"
                            onChange={handleChange}
                            value={props.info.birthday ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6 col-md-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            name="age"
                            onChange={handleChange}
                            value={props.age ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col">
                        <Form.Label>Citizen Identity number</Form.Label>
                        <Form.Control
                            type="text"
                            name="cId"
                            onChange={handleChange}
                            value={props.info.cId ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={props.info.password ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={props.info.address ?? ''}
                        />
                    </Form.Group>
                </div>

                <div className="row py-2 justify-content-end">
                    <div className="col-6 col-md-3">
                        <Button className="w-100" type="submit">
                            Save Change
                        </Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}
