import React from 'react';
import { getEvents } from '../actions/eventActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EventsList from '../components/EventsList';

class EventsPage extends React.Component {
  componentDidMount() {
    getEvents()
  }

  render() {
    return (
      <div>
        <EventsList events={ this.props.events }/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators({getEvents: getEvents}, dispatch)
}
 
function mapStateToProps(state){
  return {events: state.events}
}

export const WrapperEventsPage = connect(mapStateToProps, mapDispatchToProps)(EventsPage);
