import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Image, Accordion, Card, Button, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import app from 'firebase/app';
import 'firebase/firestore';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

import BG from '../../img/kristy_george.png';
import FTG from '../../img/family_thanksgiving.jpg';
import FD from '../../img/first_dates.jpg';
import GC from '../../img/kristy_george_grand_canyon.jpg';
import LT from '../../img/kristy_george_lake_teton.jpg';
import GT from '../../img/kristy_george_teton.jpg';
import MB from '../../img/military_banquet.jpg';
const DetailsPage = () => (
  <div>
    <DetailsPageForm/>
  </div>
)
const INITIAL_STATE = [
    {
        title:'Engagement Photos',
        img:BG  
    },
    {
        title:'Thanksgiving /W Family',
        img:FTG
    },
    {
        title:'First Dates',
        img:FD
    },
    {
        title:'Grand Canyon',
        img:GC
    },
    {
        title:'Lake Day!',
        img:LT
    },
    {
        title:'Grand Teton',
        img:GT
    },
    {
        title:'Military Banquet',
        img:MB
    }];

class DetailsPageBase extends Component{
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
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
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
const condition = authUser => !!authUser;
const DetailsPageForm = compose(
  withAuthorization(condition),
  withRouter,
  withFirebase,
)(DetailsPageBase);
export default DetailsPage;
export {DetailsPageForm};