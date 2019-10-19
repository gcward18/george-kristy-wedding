import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import {  Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import app from 'firebase/app';
import 'firebase/firestore';
import { withFirebase } from '../Firebase';

const DetailsPage = () => (
  <div>
    <DetailsPageForm/>
  </div>
)


class DetailsPageBase extends Component{
  constructor(props) {
    super(props);
    this.state = {  };
    this.db = app.firestore();
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

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
      
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="0" style={{fontFamily: 'Josefin Sans, cursive'}}>
                    DATE
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body style={{fontFamily: 'Josefin Sans, cursive'}}>
                    15 December 2019
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="1" style={{fontFamily: 'Josefin Sans, cursive'}}>
                    LOCATION
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body style={{fontFamily:'Josefin Sans, cursive'}}>
                    <a href="http://breadbutterpb.com/">
                      BREAD + BUTTER
                    </a>
                    <br/>2586 N Westwood Blvd, 
                    <br/>Poplar Bluff, MO 63901
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="2" style={{fontFamily: 'Josefin Sans, cursive'}}>
                    ACCOMODATIONS
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body style={{fontFamily:'Josefin Sans, cursive'}}>
                    <a href="https://www.choicehotels.com/missouri/poplar-bluff/comfort-inn-hotels/mo637?source=gyxt">
                    Comfort Inn Poplar Bluff North
                    </a>
                    <br/>Kristy has made a block of rooms at Comfort Inn in Poplar Bluff (which is literally <br/>
                    steps away from where the cermony and reception will be). They have agreed to a rate of $78. <br/>
                    If you want to stay here, the block is under "Ward Wedding"  <br/>
                    <br/>
                    Phone #: 573-686-5200
                    <br/>
                    Price: $78
                </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
        
    );
  }
}
const DetailsPageForm = compose(
  withRouter,
  withFirebase,
)(DetailsPageBase);
export default DetailsPage;
export {DetailsPageForm};