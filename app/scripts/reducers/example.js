import { example as constants } from '../constants';

export default function (state = true, action){
    switch (action.type){
        case constants.TURN_ON:
            return true;
        case constants.TURN_OFF:
            return false;
        case constants.TOGGLE:
            return !state;
        default:
            return state;
    }
}
