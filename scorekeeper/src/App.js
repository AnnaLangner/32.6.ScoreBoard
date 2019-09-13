import React, { Component } from 'react';
import './App.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class App extends Component {
  render() {
    return (
        <div className="App">
        </div>
    );
  }
}

export default App;
