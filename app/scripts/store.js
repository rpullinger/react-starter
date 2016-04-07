import { createStore, applyMiddlewares, compose } from 'redux';
import {responsiveStoreEnhancer} from 'redux-responsive';
import reducers from './reducers';

export default createStore(reducers, compose(
    responsiveStoreEnhancer
));
