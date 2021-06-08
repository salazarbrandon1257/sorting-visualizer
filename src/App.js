import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

function App() {
  const isBackgroundRed = true;
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
      <div>
      </div>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
