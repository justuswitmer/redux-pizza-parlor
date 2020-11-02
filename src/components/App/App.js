import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";

import { Route, HashRouter as Router, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import OrderDetails from '../OrderDetails/OrderDetails';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Checkout from '../Checkout/Checkout';


class App extends Component {
  // TODO - GET Pizza List from server

  componentDidMount = () => {
    this.getPizza();
  };

  getPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        console.log("GET Pizza response", response);
        this.props.dispatch({
          type: "GET_PIZZA",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.error("GET error", err);
      });
  };

  calculatePizzaTotal = (pizzaArray) => {
    let cartTotal = 0;
    for (let i = 0; i < pizzaArray.length; i++) {
      cartTotal += Number(pizzaArray[i].price);
    }
    return cartTotal;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <h2>${this.calculatePizzaTotal(this.props.cart)}</h2>
          </header>
          <br />
        <nav>
            <main>
              <ul>
                <li><Link to="/api/pizza">Select Pizza</Link></li>
                <li><Link to="/api/order">Order Details</Link></li>
                <li><Link to="/api/checkout">Checkout</Link></li>
              </ul>
            </main>
          </nav>


          
            <main>
              <img src="images/pizza_photo.png" />
              <p>Pizza is great.</p>

              <Route path="/api/pizza"> Pizza
                <PizzaList />
              </Route>
              <Route path="/api/order">
                <OrderDetails />
              </Route>

              <Route path="/api/checkout">
                <Checkout />
              </Route>
              <button>{/* <Link to="/order">NEXT</Link> */}</button>
            </main>


        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  cart: reduxStore.cartReducer,
  pizza: reduxStore.pizzaReducer,
});

export default connect(mapStateToProps)(App);
