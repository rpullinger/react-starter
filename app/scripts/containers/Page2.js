import React from 'react';
import Hello from '../components/hello';
import Test from '../components/test';

import { Link } from 'react-router';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Hello name="page2" />
                <Test />
                <Link to="/page3">Page3</Link>
            </div>
        )
    }
}
