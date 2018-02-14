
import { createStore, applyMiddleware } from 'redux'
import reduces from '../reducers'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(promiseMiddleware(), thunk);

export default function configureStore() {
    return createStore(reduces, middleware);
}