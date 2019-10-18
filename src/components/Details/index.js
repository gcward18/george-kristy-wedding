import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Image, Accordion, Card, Button, CarouselItem } from 'react-bootstrap';
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
    var elements = [];
    for(var key in this.state){
        elements.push(
            <CarouselItem>
                <Image 
                    src={this.state[key]['img']} 

                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      width: undefined,
                      height: undefined
                    }} 
                    rounded
                /> 
            </CarouselItem>
        )
    }

    return (
      
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="0">
                    Date
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    15 December 2019
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="1">
                    Location
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    BREAD + BUTTER
                    <br/>2586 N Westwood Blvd, 
                    <br/>Poplar Bluff, MO 63901
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