import React from 'react';
import { connect } from 'react-redux';

const EventShow = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <div>
    <span>
      <h3>Starts at { event.start_time }</h3>
      <h3> Ends at { event.end_time }</h3>
    </span>
      <h2>{ event.name }</h2>
      <p>{ descriptionAvailable ? event.description : "No description provided." }</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events.events.find(event => event.id == ownProps.match.params.eventId)
  
  if (event) {
    return { event }
  } else {
    return { event: {} }
  }
}
 
export default connect(mapStateToProps)(EventShow);