import React from 'react';
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
const App = () => (  
  <HashRouter>
    <div>
      <Navigation />
      <hr />
      <Route path={'/details'} component={DetailsPage} />
      <Route path={'/rsvp'} component={RSVPPage} />
      <Route path={'/gallery'} component={GalleryPage} />
      <Route path={'//'} component={LandingPage} />
    </div>
  </HashRouter>
);

export default withAuthentication(App);