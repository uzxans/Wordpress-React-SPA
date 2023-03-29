import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NaviBar() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Web-Global</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <Nav.Link><Link to="/">Главная</Link></Nav.Link>
              <Nav.Link><Link to="/news">Новости</Link></Nav.Link>
              <Nav.Link><Link to="/work">Услуги</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}