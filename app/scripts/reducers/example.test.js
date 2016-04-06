import { expect } from 'chai';
import { example } from '../constants';
import reducer from './example';

describe('Example reducer', () => {

    it('should set a initial state', () => {
        expect(reducer(undefined, {})).to.equal(true);
    });

    it('should handle turning off', () => {

        const action = {
            type: example.TURN_OFF
        };

        expect(reducer(false, action)).to.equal(false);
        expect(reducer(true, action)).to.equal(false);
    });

    it('should handle turning on', () => {

        const action = {
            type: example.TURN_ON
        }

        expect(reducer(false, action)).to.equal(true);
        expect(reducer(true, action)).to.equal(true);
    });

    it('should handle toggling', () => {

        const action = {
            type: example.TOGGLE
        }

        expect(reducer(false, action)).to.equal(true);
        expect(reducer(true, action)).to.equal(false);
    });

});
