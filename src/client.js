// @flow

/**
 * Created by kevin.chen on 7/10/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

function addOne(x: number): number {
    return x + 1;
}

const x = addOne(2);

ReactDOM.render(<App/>, document.getElementById('root'));

