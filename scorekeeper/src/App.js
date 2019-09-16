import React, { Component } from 'react';
import './App.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayersList from './components/PlayersList/PlayersList';

configure({ adapter: new Adapter() });

class App extends Component {
    constructor() {
        super();

        this.state = {
            players: []
        }
    }

    onScoreUpdate = (playerIndex, scoreChange) => {
        this.setState({
            players: this.state.players.map((player, index) => {
                if (index === playerIndex) {
                    return { ...player, score: player.score + scoreChange };
                }
                return player;
            })
        })
    };

    render() {
        return (
            <div className="App">
                <PlayersList
                    players={this.state.players}
                    onScoreUpdate={this.onScoreUpdate}
                />
            </div>
        );
    }


}

export default App;
