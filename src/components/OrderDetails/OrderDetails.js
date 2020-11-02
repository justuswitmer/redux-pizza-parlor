import React, { Component } from "react";
import { connect } from "react-redux";
import Checkout from "../Checkout/Checkout";

class OrderDetails extends Component {

  state = {
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    type: '',
    total: 0,
    pizzas: []
  }

  handleChange = (propertyName, event) => {
    console.log('in handleChange');
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
    console.log(this.state.type);
  }

  handleSelect = (value) => {
    console.log("in handleSelect");
    let deliveryMethod = {
      ...this.state,
      type: value,
    };
    this.setState(deliveryMethod);
    console.log("in handleSelect", deliveryMethod);
  };


  handleSubmit = () => {
    let totalPizzas = this.props.calculatePizzaTotal(this.props.cart);
    let allOrderPizzas = this.props.cart;
    console.log(totalPizzas, allOrderPizzas);
    let newState = {
      ...this.state,
      total: totalPizzas,
      pizzas: allOrderPizzas
    };
    this.setState(newState);
    console.log('in handleSubmit', newState);
    this.props.dispatch({
      type: "SET_ORDER",
      payload: newState
    });
  }


  render() {
    return (
      <div>
        <h2>Step 2: Customer Information</h2>
        <h3>{this.props.cal}</h3>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => this.handleChange('customer_name', event)}
        />
        <input
          type="text"
          placeholder="Street Address"
          onChange={(event) => this.handleChange('street_address', event)}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(event) => this.handleChange('city', event)}
        />
        <input
          type="text"
          placeholder="Zip"
          onChange={(event) => this.handleChange('zip', event)}
        />

        <select id="type" onSelect={(value) => this.handleSelect(value)}>
          <option value="" disabled selected hidden>Pickup or Delivery</option>
          <option value="Pickup">Pickup</option>
          <option value="Delivery">Delivery</option>
        </select>

        <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>


      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  cart: reduxStore.cartReducer,
  pizza: reduxStore.pizzaReducer,
});

export default connect(mapStateToProps)(OrderDetails);