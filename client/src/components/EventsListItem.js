import React from 'react';
import { formatDescription } from '../helpers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';

import Grid from '@material-ui/core/Grid';

// const EventsListItem = ({ event }) => {
class EventsListItem extends React.Component {
  constructor(){
    super()
    this.state = {
      likes: 0
    }
  }
  
  handleClick = (event) => {
    let likesPlusOne = this.state.likes + 1
    this.setState(
      {likes: likesPlusOne}
      )
  }
  
  render() {
    const descriptionAvailable = this.props.event.description
    
    return(
      <Grid item lg={24}>
      <div>
        <span>{ this.props.event.start_time }</span>
        <h2>{ this.props.event.name }</h2>
        <p>{ descriptionAvailable ? formatDescription(this.props.event.description) : "No description provided." }</p>
        <span>Likes: {this.state.likes}</span>
        <button onClick={this.handleClick}>Like</button>
      </div>
      </Grid>
    );
  }
};
  
export default EventsListItem;