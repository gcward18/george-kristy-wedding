import React from 'react';
import { 
    HashRouter,
    Route 
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutButton from '../SignOut';
import HomePage from '../Home';
import AccountPage from '../Account';
import GalleryPage from '../Gallery';
import DetailsPage from '../Details';

import { withAuthentication } from '../Session';
const App = () => (  
  <HashRouter>
    <div>
      <Navigation />
      <hr />
      <Route path={'/landing'} component={LandingPage} />
      <Route path={'/details'} component={DetailsPage} />
      <Route path={'/home'} component={HomePage} />
      <Route path={'/signup'} component={SignUpPage} />
      <Route path={'/signin'} component={SignInPage} />
      <Route path={'/signout'} component={SignOutButton} />
      
      <Route path={'/account'} component={AccountPage} />
      <Route path={'/gallery'} component={GalleryPage} />
      <Route path={'//'} component={LandingPage} />
    </div>
  </HashRouter>
);

export default withAuthentication(App);