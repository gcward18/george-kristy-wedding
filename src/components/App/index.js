import React, {Component} from 'react';
import { 
    HashRouter,
    Route 
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import RSVPPage from '../RSVP';
import GalleryPage from '../Gallery';
import DetailsPage from '../Details';

import { withAuthentication } from '../Session';
class App extends  Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
  
      <HashRouter>
        <div>
          <Navigation />
          <hr />
          <Route path={'/details'} render={() => <DetailsPage {...this.props} fontFamily={'Josefin Sans, cursive'} />} />
          <Route path={'/rsvp'} render={() => <RSVPPage {...this.props} fontFamily={'Josefin Sans, cursive'}/>} />
          <Route path={'/gallery'} render={() => <GalleryPage {...this.props}/>} fontFamily={'Josefin Sans, cursive'}/>
          <Route path={'//'} render={() => <LandingPage {...this.props} fontFamily={'Josefin Sans, cursive'}/>} />
        </div>
      </HashRouter>

    );
  }
}  

export default withAuthentication(App);