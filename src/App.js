import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Indexrouter from './router/router'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Indexrouter/>
        </div>
    );
  }
}

export default App;
