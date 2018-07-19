import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
import App from '../components/App';

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}
 
function mapStateToProps(state){
  return {events: state.events}
}

class WrapperApp extends React.Component {
  render() {
    return (
      <App />
    );
  }
}


// const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

// export default WrapperApp;

export default connect(mapStateToProps, mapDispatchToProps)(App);