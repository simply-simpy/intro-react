import React, { Component } from 'react';
import './App.css';
import Avatar from './components/Avatar';

class App extends Component {
  render() {
    return (
      <div className="avatars">
        <Avatar name="Pogo" image="http://i.pravatar.cc/300?img=3"/>
        <Avatar name="Buster" image="http://i.pravatar.cc/300?img=4"/>
        <Avatar name="Marge" image="http://i.pravatar.cc/300?img=5"/>
      </div>
    );
  }
}

export default App;
