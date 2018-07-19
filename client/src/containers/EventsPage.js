import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
import EventsList from '../components/EventsList';

class EventsPage extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  
  render() {
    let eventsReady = !this.props.loading;
  
    if(eventsReady) {
      return (
        <div>
          <EventsList events={ this.props.events.events }/>
        </div>
      );
    } 
    else {
      return ( <div>Loading...</div>)
    }
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);


