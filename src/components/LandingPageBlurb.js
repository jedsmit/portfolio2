import React from 'react';
import { colors } from '../constants/Colors';

//material-ui
import { withStyles } from '@material-ui/core/styles';

const { TEXT } = colors;

const styles = {
  root: {
    color: TEXT,
    textAlign: 'left',
    paddingLeft: '5vw',
    paddingTop: '2vh',
  },
};

const LandingPageBlurb = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h3>Hi! I'm a creative problem solver.</h3>
      <h3>
        I love to bring ideas to life. It really is what I enjoy the most.
      </h3>
      <h3>
        Take a look at what I've done and get in touch about what I can do for
        you.
      </h3>
    </div>
  );
};

export default withStyles(styles)(LandingPageBlurb);
