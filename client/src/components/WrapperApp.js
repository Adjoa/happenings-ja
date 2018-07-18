import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import App from './App';

function mapDispatchToProps(dispatch){
  return bindActionCreators({getEvents: getEvents}, dispatch)
}
 
function mapStateToProps(state){
  return {events: state.events}
}

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrapperApp;