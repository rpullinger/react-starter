import React from 'react';
import Hello from '../components/hello';
import Test from '../components/test';

import { Link } from 'react-router';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Hello name="page3" />
                <Test />
                <Link to="/page1">Page1</Link>
            </div>
        )
    }
}
