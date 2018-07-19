import React from 'react';
import { connect } from 'react-redux';

const EventShow = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <div>
      <span>{ event.start_time }</span>
      <span>{ event.end_time }</span>
      <h2>{ event.name }</h2>
      <span>{ event.address }</span>
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