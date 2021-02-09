import React from 'react';

import Project from './Project';

//material ui
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginLeft: '-3vw',
  },
};

const ProjectsContainer = props => {
  const { classes } = props;
  return (
    <Container className={classes.root}>
      <Project />
    </Container>
  );
};

export default withStyles(styles)(ProjectsContainer);
