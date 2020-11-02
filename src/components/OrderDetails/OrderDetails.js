import React, { Component } from "react";
import { connect } from "react-redux";
import Checkout from "../Checkout/Checkout";

class OrderDetails extends Component {
  state = {
    name: "",
    streetaddress: "",
    city: "",
    zip: "",
    deliveryMethod: "",
  };

  handleChange = (propertyName, event) => {
    console.log("in handleChange");
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log(this.state.deliveryMethod);
  };

  handleSubmit = () => {
    console.log("in handleSubmit", this.state);
  };

  handleSelect = (event) => {
    console.log("in handleSelect");
    this.setState({
      ...this.state,
      deliveryMethod: event.target.value,
    });
    console.log("in handleSelect", this.state.deliveryMethod);
  };

  render() {
    return (
      <div>
        <h2>Step 2: Customer Information</h2>
        {/* <form handleSubmit={this.handleSubmit}> */}

        <input
          type="text"
          placeholder="Name"
          onChange={(event) => this.handleChange("name", event)}
        />
        <input
          type="text"
          placeholder="Street Address"
          onChange={(event) => this.handleChange("streetaddress", event)}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(event) => this.handleChange("city", event)}
        />
        <input
          type="text"
          placeholder="Zip"
          onChange={(event) => this.handleChange("zip", event)}
        />

        <select
          id="deliveryMethod"
          onSelect={(event) => this.handleSelect("deliveryMethod", event)}
        >
          <option value="" disabled selected hidden>
            Pickup or Delivery
          </option>
          <option value="Pickup">Pickup</option>
          <option value="Delivery">Delivery</option>
        </select>

        {/* <label for="pickup">Pickup</label>
        <input
          type="radio"
          name="pickup"
          value="pickup"
          onChange={(event) => this.handleChange('deliveryMethod', event)}
        />

        <label for="delivery">Delivery</label>
        <input type="radio" name="Delivery" /> */}

        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {/* </form> */}
        {/* { this.state.map(object =>
          <Checkout
            key={object.id}
            orderProps={object}
          />)} */}
      </div>
    );
  }
}

export default connect()(OrderDetails);
