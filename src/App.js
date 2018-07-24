import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = '#ccc';
let defaultStyle = {
  color: textColor
};
let fakeServerData = {
  user: {
    name: 'Alex',
    playlists: [
      {
        name: 'My favorites',
        songs: ['Beat it', 'Supermassive Black Hole', 'Starway to Heaven']
      },
      {
        name: 'Weekend playlist',
        songs: ['Smooth', 'Give away', 'Numb']
      },
      {
        name: 'Work playlist',
        songs: ['Heavy road', 'The office', 'Funky town']
      },
      {
        name: 'Joga playlist',
        songs: ['Relax limo', 'Vinnyk\'s love', 'What ya looking at?']
      },
    ]
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: textColor}}>{this.props.playlists && this.props.playlists.length} playlists</h2>
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
  constructor() {
    super();
    this.state = {serverData : {}};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData : fakeServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s playlist</h1>
            <Aggregate playlists={this.state.serverData.user.playlists}/>
            <Aggregate/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> :
          <div>
            <h1>Loading...</h1>
            <div className="App">
              <img className="App-logo" src={logo}/>
            </div>
          </div>
        } 
      </div>
    );
  }
}

export default App;
