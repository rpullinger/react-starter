import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './scripts/store';
import App from './scripts/containers/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
