import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { Image, Container, Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import app from 'firebase/app';
import 'firebase/firestore';
import { withFirebase } from '../Firebase';
import { Transform } from 'stream';

const GalleryPage = () => (
  <div>
    <GalleryPageForm/>
  </div>
)

class GalleryPageBase extends Component{
  constructor(props) {
    super(props);
    this.state = { images:[]};
    this.db = app.firestore();
  }
  componentDidMount() {
    this.setState({images: this.importAll(require.context('../../img_gallery', false, /\.(png|jpe?g|svg)$/))  });
  }
  
  importAll = r => {
    return r.keys().map(r);
  }
  render() {
    var elements = [];
    var key;
    for(key=0; key < this.state.images.length; key++ ){
        elements.push(
            <CarouselItem key={key} style={{height:'50%'}} fluid>
                <Image 
                    src={this.state.images[key]} 

                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      width: 'auto',
                      height: 'auto',
                      maxHeight: 800,
                      maxWidth: '100%'
                    }} 
                    rounded
                    fluid
                >
                </Image> 
            </CarouselItem>
        )
    }

    return (
        <Container style={{ display:'flex', justifyContent:'center', maxHeight: 800 }}>
            <Carousel>
            {elements}
            </Carousel>
        </Container>
      
    );
  }
}
const GalleryPageForm = compose(
  withRouter,
  withFirebase,
)(GalleryPageBase);
export default GalleryPage;
export {GalleryPageForm};