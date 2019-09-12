import React from 'react';
import App from './App';
import shallow from "enzyme/src/shallow";

it('renders without crashing', () => {
  shallow(<App/>);
});
