import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./redux/reducers";
import {createLogger} from 'redux-logger'
import _ from 'lodash'

const logger = createLogger();

const middlewares = _.compact([thunk, logger]);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const initialState = {};
const store = createStoreWithMiddleware(reducer, initialState);

export default store;
