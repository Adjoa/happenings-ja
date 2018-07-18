import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/events">Find an event</NavLink>&nbsp;
      { /* <NavLink to="/organize">Submit an event</NavLink> */ }
    </div>
  );
};

export default NavBar;