import { Route, Routes, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

/*  icons */
import { FaUser } from 'react-icons/fa';

/* local elements */
import { PulicRoutes } from '../../../../routes/Route';

const textNonUnderline = {
    color: 'inherit',
    textDecoration: 'none',
};

export default function Header() {
    const [user, setUser] = useState();
    useEffect(() => {
        var user = localStorage.getItem('username');
        setUser(user);
    }, []);

    return (
        <>
            <Navbar bg="light" expand="lg" style={{ boxShadow: '0px 0px 20px 1px lightgrey' }}>
                <Container>
                    <Navbar.Brand>
                        <Link style={textNonUnderline} to="/">
                            DOCMED
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex flex-column'>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="align-items-center" navbarScroll>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/">
                                        Home
                                    </Link>
                                </Nav>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/department">
                                        Department
                                    </Link>
                                </Nav>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/blog">
                                        Blog
                                    </Link>
                                </Nav>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/pages">
                                        Pages
                                    </Link>
                                </Nav>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/doctors">
                                        Doctors
                                    </Link>
                                </Nav>
                                <Nav className='px-3'>
                                    <Link style={textNonUnderline} to="/contact">
                                        Contact
                                    </Link>
                                </Nav>
                                {/* <Button variant="primary">Make an Appoinment</Button> */}
                                <Nav className='px-3 align-items-center'>
                                    <Button variant="white">
                                        <Link style={textNonUnderline} to="/account">
                                            <FaUser></FaUser>
                                            <p>{user}</p>
                                        </Link>
                                    </Button>
                                    {!user && <Link to="/login">Login</Link>}
                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <Routes>
                {PulicRoutes.map((route, i) => {
                    let Page = route.element;
                    return (
                        <Route path={route.path} element={<Page />} key={i} />
                    );
                })}
            </Routes>
        </>
    );
}
