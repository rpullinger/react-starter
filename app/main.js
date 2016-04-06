import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import Test from './test';

ReactDOM.render(
    <div>
        <Hello name="richard" />
        <Test />
    </div>,
    document.getElementById('root')
);
