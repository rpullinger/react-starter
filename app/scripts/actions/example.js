import { example } from '../constants';

export function turnOff(){
    return {
        type: example.TURN_OFF
    };
}

export function turnOn(){
    return {
        type: example.TURN_ON
    };
}

export function toggle(){
    return {
        type: example.TOGGLE
    };
}
