import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContainer} from 'react-hot-loader';

function render(Component) {
  ReactDOM.render(
  <AppContainer>
    <Component/>
  </AppContainer>,
  document.getElementById('root')
);
}

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App.js').default;
    render(NextApp);
  });
}