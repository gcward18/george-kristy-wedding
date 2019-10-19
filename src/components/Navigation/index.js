import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <NavigationAuth/>
  </div>  
);

class NavigationAuth extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Navbar className="bg-light justify-content-between">
        <Navbar.Brand href={ROUTES.LANDING} style={{fontFamily: 'Josefin Sans, cursive'}}>Kristy & George</Navbar.Brand>
        <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.RSVP} style={{fontFamily: 'Josefin Sans, cursive'}}>RSVP</Nav.Link>
          <Nav.Link href={ROUTES.DETAILS} style={{fontFamily: 'Josefin Sans, cursive'}}>DETAILS</Nav.Link>
          <Nav.Link href={ROUTES.GALLERY} style={{fontFamily: 'Josefin Sans, cursive'}}>GALLERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    );
  }
}
export default Navigation;