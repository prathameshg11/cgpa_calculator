import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function NavBar() {
    return (
        <div>
            <Navbar expand="lg" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><FaHome size={30}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/calcgpa" className='nav-link'>Calculate CGPA</Link>
                        <Link to="/" className='nav-link'>Calculate SGPA</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar