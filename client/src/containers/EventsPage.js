import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
import { Route, Switch } from 'react-router-dom';

import EventsList from '../components/EventsList';
import EventForm from './EventForm';
import EventShow from './EventShow';

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
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={EventForm} />
            <Route path={`${this.props.match.url}/:eventId`} component={EventShow}/>
          </Switch>
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


