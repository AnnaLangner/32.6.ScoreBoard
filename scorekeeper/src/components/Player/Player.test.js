import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player/>);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = new Number();
    const playerComponent = shallow(<Player name={playerScorePassed} />);

    const playerScoreRendered = playerComponent.find('.Player__score').Number.text();

    expect(playerScoreRendered).toEqual(playerScorePassed);
});