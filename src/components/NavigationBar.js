import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
}


const Styles = styled.div`
  .navbar { background-color: #0a192f; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .MuiSlider-root {
      color: #8892b0;
      width: 100%;
      cursor: pointer;
      height: 2px;
      display: inline-block;
      width: 40%;
      margin: auto;
      box-sizing: content-box;
      touch-action: none;
      -webkit-tap-highlight-color: transparent;
    }
`;


export const NavigationBar = () => (
  <Styles>

    <Navbar expand="lg">
      
      <Navbar.Brand href="/">Sorting Visualizer</Navbar.Brand>
      <Nav.Item> </Nav.Item>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className= "justify-content-center"/>       
      <Slider
      className= "justify-content-center"
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Navbar>
  </Styles>
)