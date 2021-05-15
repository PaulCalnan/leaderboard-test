import React, { Component } from 'react';
import { PlayerList } from './components/playerlist/Playerlist.js';
//import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      score: []
    };
  }

  componentDidMount() {
    fetch('https://gahoot-server.herokuapp.com/users.json')
    .then(response => response.json())
    .then(users => this.setState({ players: users }));
  }

  render() {
    const { players, score} = this.state;
    const sortedPlayers = players.sort(player =>
       player.score
    );
    return (
      <div className="App">
      <h1> Scoreboard </h1>

        <PlayerList players={sortedPlayers} />
      </div>
    );
  }
}

export default App;
