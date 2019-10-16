import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Image,Card, Container, Carousel, CarouselItem } from 'react-bootstrap';
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
const GalleryPage = () => (
  <div>
    <GalleryPageForm/>
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

class GalleryPageBase extends Component{
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
                        maxHeight:750,                       
                        boxShadow:'rgba(0, 0, 0, 0.75) 22px 22px 67px -19px',
                    }} 
                    rounded
                /> 
            </CarouselItem>
        )
    }

    return (
        <Container style={{ display:'flex', justifyContent:'center' }}>
            <Carousel>
            {elements}
            </Carousel>
        </Container>
      
    );
  }
}
const condition = authUser => !!authUser;
const GalleryPageForm = compose(
  withAuthorization(condition),
  withRouter,
  withFirebase,
)(GalleryPageBase);
export default GalleryPage;
export {GalleryPageForm};