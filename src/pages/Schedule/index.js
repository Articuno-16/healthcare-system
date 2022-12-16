import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Container } from 'react-bootstrap';
import Calendar from './Calendar';

export default function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const [user, setUser] = useState('');
    const id = localStorage.getItem('id');

    useEffect(() => {
        axios
            .get(`http://localhost/api/getSchedule/?id=${id}`)
            .then((res) => {
                setSchedule(res.data);
                setUser(res.data[0].username);
            });
    }, [id]);

    return (
        <div className="main-width m-auto py-5">
            <Container>
                <div className="py-4">
                    <h1 className="py-2">Schedule Management</h1>
                    <h4>Name: {user}</h4>
                </div>
                <Tabs defaulactivekey="1" className="mb-3">
                    <Tab eventKey="1" title="Past Schedule">
                        <Calendar props={schedule.filter((s) => s.state === 'passed')} />
                    </Tab>
                    <Tab eventKey="2" title="Upcoming Schedule">
                        <Calendar props={schedule.filter((s) => s.state === 'upcoming')} />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}
