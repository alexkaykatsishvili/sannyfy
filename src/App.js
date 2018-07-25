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
        songs: [
          {name: 'Beat it',
          duration: 180
        },
          {name: 'Supermassive Black Hole',
          duration: 200
        }, 
          {name: 'Starway to Heaven',
          duration: 215
        }
        ]
      },
      {
        name: 'Weekend playlist',
        songs: [
          {name: 'Smooth',
          duration: 325
        }, 
          {name: 'Give away',
          duration: 140
        }, 
          {name: 'Numb',
          duration: 286
        }
        ]
      },
      {
        name: 'Work playlist',
        songs: [
          {name: 'Heavy road',
          duration: 302
        }, 
          {name: 'The office',
          duration: 190
        }, 
          {name: 'Funky town',
          duration: 199
        }
        ]
      },
      {
        name: 'Joga playlist',
        songs: [
          {name: 'Relax limo',
          duration: 202
        }, 
          {name: 'Vinnyk\'s love',
          duration: 160
        },
          {name: 'What ya looking at?',
          duration: 420
        }
        ]
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: textColor}}>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: textColor}}>{Math.round(totalDuration/60/60)} hours</h2>
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
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
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
