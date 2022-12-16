import {Route, Routes, Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// icons
import {FaUser} from 'react-icons/fa';
//
import { PulicRoutes } from '../../../../routes/Route';
import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';



const textNonUnderline = { 
    color: 'inherit', 
    textDecoration: 'none'
}

export default function Header() {
   // let navigate = useNavigate();
    const [user, setUser] = useState("");
      useEffect(() => {
     var user = localStorage.getItem('username');
    setUser(user);
    },[]);
const logOut = () =>{
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.clear();
    window.location.reload();
}
    return (
        <>
            <Navbar expand="lg" className='p-3' style={{boxShadow: '0px 0px 20px 1px lightgrey'}}>
            <Container className='main-width'>
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
                <Nav.Link>
                    <Button variant='white'>
                        <div className='btn btn-light'>
                        <FaUser></FaUser>
                       <p>{user}</p> 
                       {!user &&  <Link style={textNonUnderline} to='/login'>Login</Link>}
                        {user && <Link style={textNonUnderline} to='' onClick={logOut}>Logout</Link>}
                        </div>
                        </Button>
                        
                </Nav.Link>
            </Container>
            </Navbar>

            <Routes>
                {
                    PulicRoutes.map((route, i) => {
                        let Page = route.element;
                        return <Route path={route.path} element={<Page/>} key={i} />
                    })
                }
            </Routes>
        </>
        
    )
}