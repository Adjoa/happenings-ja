import React from 'react';
import { NavLink } from 'react-router-dom';

const Welcome = () => (
  <section className="welcome">
    <h1>Find your next adventure.</h1>
    <h1><NavLink to="/events">Start</NavLink></h1>
  </section>
  
  );

export default Welcome;