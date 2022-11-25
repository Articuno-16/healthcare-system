import {Route, Routes, Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from './Home';
import Contact from './Contact';

const textNonUnderline = { 
    color: 'inherit', 
    textDecoration: 'none'
}

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className='p-3' style={{boxShadow: '0px 0px 20px 1px lightgrey'}}>
            <Container>
                <Navbar.Brand>
                    <Link style={textNonUnderline} to="/">DOCMED</Link>
                </Navbar.Brand>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/department">Department</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/blog">Blog</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/pages">Pages</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/doctors">Doctors</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={textNonUnderline} to="/contact">Contact</Link>
                </Nav.Link>
                <Button variant="primary">Make an Appoinment</Button>
            </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </>
        
    )
}