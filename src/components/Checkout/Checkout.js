import React, { Component } from "react";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    return (
      <div>
        <div>
        <h2>Step 3: Checkout</h2>
            <ul>
              <li>{this.props.orderProps.name}</li>
              <li>{this.props.orderProps.streetaddress}</li>
              <li>{this.props.orderProps.city}, {this.props.orderProps.zip}</li>
            </ul>
        <h3>{this.props.orderProps.deliveryMethod}</h3>
        </div>
        
        <div id = "Table of Orders">
        <table>
          <thead>
            <th>Name</th>
            <th>Cost</th>
          </thead>
          <tbody>
            <th>{this.props.cart.name}</th>
            <th>{this.props.cart.price}</th>
          </tbody>
        </table>

        </div>


      </div>
    )
  }
}

const reduxState = (reduxState) => {
  return {
    cart: reduxState.cartReducer,

  }
}
export default connect(reduxState)(Checkout)