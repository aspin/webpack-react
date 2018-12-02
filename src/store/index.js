import type { AppState } from '../reducers';
import reducers from '../reducers';
import { createStore } from 'redux';

export default function configureStore(initialState: AppState) {
  // noinspection JSUnresolvedVariable
  const store = createStore(reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // Webpack HMR
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}