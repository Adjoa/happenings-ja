import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import EventsPage from '../containers/EventsPage';
import Footer from '../components/Footer';

class App extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  
  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        <EventsPage events={ this.props.events.events} />
        <Footer/>
      </div>
    );
  }
}

export default App;
