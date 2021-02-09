import React from 'react';
import { colors } from '../constants/Colors';
//material-ui
import { withStyles } from '@material-ui/core/styles';

const { TEXT } = colors;

const styles = {
  root: {
    color: TEXT,
    fontSize: 40,
    width: '100vw',
    height: '5vh',
    background: 'none',
    boxShadow: 'none',
    textAlign: 'left',
    padding: '5vw',
    // textShadow: '2px 3px 2px #2e070e',
  },
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root} color='transparent'>
      jed smit | web develpoment
    </div>
  );
};

export default withStyles(styles)(Navbar);
