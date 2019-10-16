import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>  
);
const NavigationAuth = () => (
    <Navbar className="bg-light justify-content-between">
        <Navbar.Brand href={ROUTES.LANDING}>Kristy & George</Navbar.Brand>
        <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link href={ROUTES.GALLERY}>Gallery</Nav.Link>
          <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);
const NavigationNonAuth = () => (
    <Navbar>
      <Navbar.Brand href={ROUTES.LANDING}>Kristy & George</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.SIGN_IN}>Login</Nav.Link>
          <Nav.Link href={ROUTES.SIGN_UP}>Sign up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
export default Navigation;