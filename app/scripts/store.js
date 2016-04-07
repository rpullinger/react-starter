import { createStore, applyMiddleware, compose } from 'redux';
import {responsiveStoreEnhancer} from 'redux-responsive';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(reducers, compose(
    responsiveStoreEnhancer,
    applyMiddleware(thunk)
));
