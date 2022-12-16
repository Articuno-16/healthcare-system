import React, { useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Create() {
    const [schedule, setSchedule] = useState({});
    const id = localStorage.getItem('id');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(schedule);
        const url = `http://localhost/api/getSchedule/?id=${id}`;
        axios.post(url, schedule);
        alert('Your schedule has been updated!');
        navigate('/schedule');
    };

    const handleChange = (event) => {
        setSchedule((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Container className="m-auto py-5">
            <div className="py-md-3">
                <h2>Make an appoinment</h2>
                {/* <Link to="/schedule">Manage your schedule here</Link> */}
            </div>

            <Form className="py-3" onSubmit={handleSubmit}>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            // value={info.firstname ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            // value={info.lastname ?? ''}
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
                            // value={info.email ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone_number"
                            onChange={handleChange}
                            // value={info.phone_number ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                            {/* <option value={info.gender}>{info.gender}</option> */}
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
                            // value={info.birthday ?? ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6 col-md-3">
                        <Form.Label>Citizen Identity number</Form.Label>
                        <Form.Control
                            type="text"
                            name="cId"
                            onChange={handleChange}
                            // value={info.cId ?? ''}
                            disabled
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
                            // value={info.address ?? ''}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col">
                        <Form.Label>Choose Department</Form.Label>
                        <Form.Select name='department'>
                            <option value="" hidden selected></option>
                            <option value="Eye">Eye</option>
                            <option value="skin">Skin</option>
                            <option value="pathology">Pathology</option>
                            <option value="Medicine">Medicine</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col">
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Select name='category'>
                            <option value="Eye">...</option>
                            <option value="skin">...</option>
                            <option value="pathology">...</option>
                            <option value="Medicine">...</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col">
                        <Form.Label>Choose Doctor</Form.Label>
                        <Form.Select name='doctor'>
                            <option value="Eye">...</option>
                            <option value="skin">...</option>
                            <option value="pathology">...</option>
                            <option value="Medicine">...</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col row">
                        <Form.Label>Choose Time</Form.Label>
                        <Form.Control
                            className='col'
                            type="date"
                            name="time"
                            onChange={handleChange}
                            value={'2022-12-16'}
                        />
                        <Form.Select className='col'>
                            <option value="08:00">08:00</option>
                            <option value="09:45">09:45</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="row py-2 justify-content-end">
                    <div className="col-6 col-md-3">
                        <Button className="w-100" type="submit">Send Request </Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}
