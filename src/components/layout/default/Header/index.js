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

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <Navbar bg="light" expand="lg" style={{ boxShadow: '0px 0px 5px 1px lightgray' }}>
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
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/">
                                        Home
                                    </Link>
                                </Nav>
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/department">
                                        Department
                                    </Link>
                                </Nav>
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/blog">
                                        Blog
                                    </Link>
                                </Nav>
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/pages">
                                        Pages
                                    </Link>
                                </Nav>
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/doctors">
                                        Doctors
                                    </Link>
                                </Nav>
                                <Nav className='px-3 py-2'>
                                    <Link style={textNonUnderline} to="/contact">
                                        Contact
                                    </Link>
                                </Nav>
                                <Button variant="primary"><Link style={textNonUnderline} to='/create'>Make an Appoinment</Link></Button>
                                <Nav className='px-3 py-2 align-items-center'>
                                    <Button variant="white">
                                        <Link style={textNonUnderline} to="/account">
                                            <FaUser></FaUser>
                                            <p>{user}</p>
                                        </Link>
                                    </Button>
                                    {!user &&  <Link style={textNonUnderline} to='/login'>Login</Link>}
                                    {user && <Link style={textNonUnderline} to='' onClick={handleLogout}>Logout</Link>}
                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <Routes>
                {PulicRoutes.map((route, i) => {
                    let Page = route.element;
                    return <Route path={route.path} element={Page} key={i} />;
                })}
            </Routes>
        </>
    );
}
