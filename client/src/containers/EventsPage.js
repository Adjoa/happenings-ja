import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getEvents } from '../actions/eventActions';
import EventsList from '../components/EventsList';
import EventShow from './EventShow';

class EventsPage extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    return (
      <div>
        <EventsList events={ this.props.events.events }/>
        <Route path={`${this.props.match.url}/:eventId`} component={EventShow}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getEvents: getEvents}, dispatch)
}
 
function mapStateToProps(state){
  return {events: state.events}
}

export const WrapperEventsPage = connect(mapStateToProps, mapDispatchToProps)(EventsPage);
