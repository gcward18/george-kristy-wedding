import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <NavigationAuth/>
  </div>  
);
const NavigationAuth = () => (
    <Navbar className="bg-light justify-content-between">
        <Navbar.Brand href={ROUTES.LANDING}>Kristy & George</Navbar.Brand>
        <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.RSVP}>RSVP</Nav.Link>
          <Nav.Link href={ROUTES.DETAILS}>DETAILS</Nav.Link>
          <Nav.Link href={ROUTES.GALLERY}>GALLERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
);
export default Navigation;