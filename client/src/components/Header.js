import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Happenings JA
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
  
export default  withStyles(styles)(Header);