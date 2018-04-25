import React, { Component } from 'react';

import './App.css';

import PersonList from './Components/BuscaCidades';
import Campos from './Components/Campos';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Campos />
        <PersonList />

      </div>
    );
  }
}

export default App;
