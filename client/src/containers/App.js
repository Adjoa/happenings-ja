import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Welcome/>
        <Footer/>
      </div>
    );
  }
}

export default App;
