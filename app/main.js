import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import Test from './test';

ReactDOM.render(
    <div>
        <Hello name="rich" />
        <Test />
    </div>,
    document.getElementById('root')
);
