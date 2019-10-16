import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

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
  num_guests: '',
  attending: '',
  notes: '',
};

class HomePageBase extends Component{
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { name, num_guests, attending, notes } = this.state;
    console.log(name, num_guests, attending, notes);
    this.props.firebase 
      .addAttendant(name, num_guests, attending, notes)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({error});
      });
    
    // event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };
  render() {
    const { name, num_guests, attending, notes } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="num_guests"
          value={num_guests}
          onChange={this.onChange}
          type="number"
          placeholder="Num_guests"
        />
        <input
          name="attending"
          value={attending}
          onChange={this.onChange}
          type="checkbox"
          checked
        />
        <input
          name="notes"
          value={notes}
          onChange={this.onChange}
          type="text"
          placeholder="Notes"
        />
        <input type="submit" value="Submit"></input>
      </form>
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