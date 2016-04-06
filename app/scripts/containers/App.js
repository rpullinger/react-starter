import React from 'react';
import Hello from '../components/hello';
import Test from '../components/test';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello name="richard" />
                <Test />
            </div>
        )
    }
}
