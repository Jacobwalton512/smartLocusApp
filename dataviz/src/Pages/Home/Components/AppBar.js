import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
// import styled from "styled-components";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'white',
  }
};



function AppBarHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Smart Locus
          </Typography>  
          <Button color="inherit">
            <Link to="/About" className={classes.link}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Contact" className={classes.link}>Contact Us</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarHeader);