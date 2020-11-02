import React, { Component } from "react";
import { connect } from "react-redux";
import Checkout from "../Checkout/Checkout"

class OrderDetails extends Component {

  state = {
    name: '',
    streetaddress: '',
    city: '',
    zip: '',
    deliveryMethod: ''
  }

  handleChange = (propertyName, event) => {
    console.log('in handleChange');
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
    console.log(this.state.deliveryMethod);


  }

  handleSubmit = () => {
    console.log('in handleSubmit');

  }


  render() {
    return (
      <div>
        <h2>Step 2: Customer Information</h2>
        <form handleSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => this.handleChange('name', event)}
          />
          <input
            type="text"
            placeholder="Street Address"
            onChange={(event) => this.handleChange('streetaddress', event)}
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
          <label for="pickup">Pickup</label>
          <input
            type="radio"
            name="pickup"
            value="pickup"
            onChange={(event) => this.handleChange('deliveryMethod', event)}
          />

          <label for="delivery">Delivery</label>
          <input type="radio" name="Delivery" />

          <button type="submit">Submit</button>

        </form>

          
            <Checkout
                orderProps = {this.state}
            />
      </div>
    )
  }
}

export default connect()(OrderDetails);