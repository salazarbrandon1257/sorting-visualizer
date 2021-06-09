import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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
  .MuiSlider-root {
    position: absolute !important;
    left: 25%;
    right: 25%;
    color: #6f978e;
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />       
    </Navbar>
  </Styles>
)