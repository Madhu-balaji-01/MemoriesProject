import React from 'react';
import ReactDOM from 'react-dom';
//Keeps track of the store (global state) and allows us to
// access this store from anywhere inside the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

import App from './App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
