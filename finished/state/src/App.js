import React, { Component } from 'react';
import DropDown from './components/DropDown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <DropDown />
        <div style={{marginTop: 100 + "px", marginBottom: 100 + "px"}} className="border-top"/>
      </div>
    );
  }
}

export default App;
