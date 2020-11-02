import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//import reduxFiles
// import cartReducer from './Reducers/cartReducer';
// import pizzaReducer from './Reducers/pizzaReducer';
// import orderReducer from './Reducers/orderReducer'

const cartReducer = (state = [], action) => {
    if (action.type === "ADD_TO_CART") {
        let newCart = [
            ...state,
            action.payload
        ];
        console.log("in cartReducer", newCart);
        return newCart;
    }
    if (action.type === "NEW_CART") {
        console.log("in cart deleter", action.payload);
        return action.payload;
    }

    return state;
}

const pizzaReducer = (state = [], action) => {
    if (action.type === "GET_PIZZA") {
        console.log("in pizzaReducer");
        return action.payload;
    }
    return state;
}
// const orderReducer = (state = [], action) => {
//     if (action.type === ) {
//         console.log("in reducer");
//         return action.payload;
//     }

//     return state;


// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        cartReducer,
        pizzaReducer,
        //orderReducer
    }),
    applyMiddleware(),
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
