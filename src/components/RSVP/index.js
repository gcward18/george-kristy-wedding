import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import app from 'firebase/app';
import 'firebase/firestore';
// import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const RSVPPage = () => (
  <div>
    <RSVPPageForm/>
  </div>
)
const INITIAL_STATE = {
  name: '',
  num_party: '',
  notes: '',
  success: ''
};

class RSVPPageBase extends Component{
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
    }).then(() => {
      this.setState({success:'Submitted Successfully'})
      console.log("success");
    })
    .catch(e => {console.log("ERROR:"+e); this.setState({success:'Failed to Submit'})});
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };
  render() {
    const {
      success
    } = this.state;

    return (

      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Col} >
          <Form.Label style={{fontFamily: 'Josefin Sans, cursive'}}>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Full Name" onChange={this.onChange}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label style={{fontFamily: 'Josefin Sans, cursive'}}>Attending</Form.Label>
          <Form.Control name="attending" as="select" placeholder="Choose one..."onChange={this.onChange}>
            <option>Choose one...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label style={{fontFamily: 'Josefin Sans, cursive'}}>Number in Party</Form.Label>
          <Form.Control name="num_party" type="number" placeholder="0" min="0" onChange={this.onChange}/>
        </Form.Group>
        
        <Form.Group as={Col}>
          <Form.Label style={{fontFamily: 'Josefin Sans, cursive'}}>Notes for Bride and Groom</Form.Label>
          <Form.Control name="notes" as="textarea" rows="3" onChange={this.onChange}/>
        </Form.Group>

        <div className="col-12 text-right">
          <Button className="btn" variant="primary" type="submit"  style={{fontFamily: 'Josefin Sans, cursive'}}>
            Submit
          </Button>
        </div>
        {success && window.alert(success)}
      </Form>
    );
  }
}
// const condition = authUser => !!authUser;
const RSVPPageForm = compose(
  // withAuthorization(condition),
  withRouter,
  withFirebase,
)(RSVPPageBase);
export default RSVPPage;
export {RSVPPageForm};