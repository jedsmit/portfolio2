import React from 'react';

//material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = {
  fader: {
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    opacity: 0,
    zIndex: 10000,
    animation: '$fadeOut 5s',
  },
  '@keyframes fadeOut': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
};
const Fader = props => {
  const { classes } = props;
  return <div className={classes.fader}></div>;
};

export default withStyles(styles)(Fader);
