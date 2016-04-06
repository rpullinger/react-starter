import { expect } from 'chai';
import { example } from '../constants';
import * as actions from './example';

describe('Example actions', () => {

    it('should have a turn on action', () => {

        const expectedAction = {
            type: example.TURN_ON
        }

        expect(actions.turnOn()).to.deep.equal(expectedAction);

    });

    it('should have a turn off action', () => {

        const expectedAction = {
            type: example.TURN_OFF
        }

        expect(actions.turnOff()).to.deep.equal(expectedAction);
    });

    it('should have a toggle action', () => {

        const expectedAction = {
            type: example.TOGGLE
        }

        expect(actions.toggle()).to.deep.equal(expectedAction);
    });


});
