import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";

import { connect } from "react-redux";
import { Route, HashRouter as Router, Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";

class App extends Component {
  // TODO - GET Pizza List from server

  componentDidMount = () => {
    this.getPizza();
  };

  getPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    }).then((response) => {
      console.log("GET Pizza response", response);
    });
    this.props
      .dispatch({
        type: "GET_PIZZA",
        payload: response.data,
      })
      .catch((err) => {
        console.error("GET error", err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
        <PizzaList />
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(App);
