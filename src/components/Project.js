import React from 'react';

//material-ui
import { withStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, CardHeader } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const styles = {
  root: {
    color: 'white',
    padding: '5vw',
  },
  projectCard: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
  icon: {
    backgroundColor: 'white',
  },
};

const Project = props => {
  const { classes } = props;
  return (
    <Container className={classes.root}>
      <Card className={classes.projectCard}>
        <CardHeader title='Some Stuff'></CardHeader>
        <CardContent>
          <p>This is a React app</p>
          <GitHubIcon />
          <WebIcon />
        </CardContent>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(Project);
