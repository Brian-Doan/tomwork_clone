import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootWatcher from './watcher';

const saga = createSagaMiddleware();
const middleWares = [saga];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);

export default store;
