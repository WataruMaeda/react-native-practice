import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import Home from './screens/Home'

const store = configureStore()

export default () => (
    <Provider store={store}>
        <Home />
    </ Provider>
)