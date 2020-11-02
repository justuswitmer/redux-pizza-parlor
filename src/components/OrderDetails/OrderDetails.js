import React, { Component } from "react";
import { connect } from "react-redux";

class OrderDetails extends Component {



  handleChange = () => {
    console.log('in handleChange');

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
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Street Address"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="City"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Zip"
            onChange={this.handleChange}
          />
          <label for="pickup">Pickup</label>
          <input type="radio" name="pickup" value="pickup" />

          <label for="delivery">Delivery</label>
          <input type="radio" name="Delivery" />

          <input type="submit" value="NEXT" />

        </form>
      </div>
    )
  }
}

export default connect()(OrderDetails);