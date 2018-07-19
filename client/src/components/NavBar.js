import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <NavLink to="/events">Find an event</NavLink>&nbsp;
          <NavLink to="/events/new">Submit an event</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default NavBar;