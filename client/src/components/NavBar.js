import React from 'react';
import EventFormWrapper from '../containers/EventForm';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to="/events">
                    Find an event
                  </Button>
                </Grid>
                <Grid item>
                  <EventFormWrapper />
                  {/* <Button variant="outlined" color="primary" component={Link} to="/events/new">
                    Submit an event
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      );
  }
}

export default withStyles(styles)(NavBar);