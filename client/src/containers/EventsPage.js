import React from 'react';
import { getEvents } from '../actions/eventActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EventsPage extends React.Component {
  componentDidMount() {
    getEvents()
  }

  render() {
    return (
      <div>
        <p> A list of events</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators({getEvents: getEvents}, dispatch)
}
 
// function mapStateToProps(state){
//   return {events: state.events}
// }

export const WrapperEventsPage = connect(null, mapDispatchToProps)(EventsPage);
