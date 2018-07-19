import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/events">Find an event</NavLink>&nbsp;
      <NavLink to="/events/new">Submit an event</NavLink>
    </nav>
  );
};

export default NavBar;