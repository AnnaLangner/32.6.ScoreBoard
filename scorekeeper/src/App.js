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
            players: [
                {
                    name: 'Kunegunda',
                    score: 5,
                },
                {
                    name: 'Antoś',
                    score: 0,
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <PlayersList players={this.state.players} />
            </div>
        );
    }


}

export default App;
