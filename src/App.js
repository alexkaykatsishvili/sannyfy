import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = '#ccc';
let defaultStyle = {
  color: textColor
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: textColor}}>Number text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist name</h3>
        <ul style={{...defaultStyle}}>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let title = 'Sannyfy';
    return (
      <div className="App">
        <h1>{title}</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
