import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import config from '../../config';

import example from './example';

export default combineReducers({
    example,
    browser: createResponsiveStateReducer(config.breakpoints),
    routing: routerReducer
});
