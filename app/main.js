import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './scripts/store';
import routes from './scripts/routes';

// import App from './scripts/containers/app';
console.log(routes);


const history = syncHistoryWithStore(browserHistory, store);

history.listen((location) => {
    console.log(location.pathname);
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
