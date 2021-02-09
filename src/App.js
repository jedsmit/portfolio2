import './App.css';

//components
import Navbar from './components/Navbar';
import LandingPageBlurb from './components/LandingPageBlurb';
import Fader from './components/Fader';
import ProjectsContainer from './components/ProjectsContainer';
import bgImage from './assets/desk-lamp.jpg';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const styles = {
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    maxWidth: '100vw',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Fader />
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={6}>
          <LandingPageBlurb />
        </Grid>
        <Grid item xs={6}>
          <ProjectsContainer />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
