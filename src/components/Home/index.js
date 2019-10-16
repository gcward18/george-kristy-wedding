import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import app from 'firebase/app';
import 'firebase/firestore';
import { withAuthorization } from '../Session';
import './Home.css';
import { withFirebase } from '../Firebase';

const HomePage = () => (
  <div>
    <HomePageForm/>
  </div>
)
const INITIAL_STATE = {
  name: '',
  num_party: '',
  notes: '',
};

class HomePageBase extends Component{
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.db = app.firestore();
  }
  onSubmit = event => {
    const { name, num_party, attending, notes } = this.state;
    var isAttending = (attending === "Yes");

    this.db.collection("attendants").doc(name).set({
      name,
      num_party,
      attending: isAttending,
      notes
    }).then(() => {console.log("success")})
    .catch(e => {console.log("ERROR:"+e)});
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };
  render() {
    return (

      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Col} controlID="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Full Name" onChange={this.onChange}/>
        </Form.Group>

        <Form.Group as={Col} controlID="num_party">
          <Form.Label>Number in Party</Form.Label>
          <Form.Control name="num_party" type="number" placeholder="0" min="0" onChange={this.onChange}/>
        </Form.Group>

        
        <Form.Group as={Col} controlId="attending">
          <Form.Label>Attending</Form.Label>
          <Form.Control name="attending" as="select" placeholder="Choose one..."onChange={this.onChange}>
            <option>Choose one...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="notes">
          <Form.Label>Notes for Bride and Groom</Form.Label>
          <Form.Control name="notes" as="textarea" rows="3" onChange={this.onChange}/>
        </Form.Group>

        <div className="col-12 text-right">
          <Button className="btn" variant="primary" type="submit" >
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
const condition = authUser => !!authUser;
const HomePageForm = compose(
  withAuthorization(condition),
  withRouter,
  withFirebase,
)(HomePageBase);
export default HomePage;
export {HomePageForm};