import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar />
        <p> A list of events</p>
        <Footer/>
      </div>
    );
  }
}

export default App;
