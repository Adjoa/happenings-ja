import React from 'react';
import { render } from 'react-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import EventsPage from '../containers/EventsPage';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        <EventsPage />
        <Footer/>
      </div>
    );
  }
}

export default App;
