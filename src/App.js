// @flow

import React from 'react';
import { Grid } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({
});

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <h1>Hello world!</h1>
        </Grid>
      </Provider>
    );
  }
}