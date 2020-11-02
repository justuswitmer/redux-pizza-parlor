import React, { Component } from "react";
import { connect } from "react-redux";

class Checkout extends Component {

  sendPizzas = () => {
    // axios({
    //   method: "POST",
    //   url: "/api/pizza",
    // }).then((response) => {
    //   console.log("GET Pizza response", response);
    //   this.props.dispatch({
    //     type: "GET_PIZZA",
    //     payload: response.data,
    //   });
    // }).catch((err) => {
    //   console.error("GET error", err);
    // });
  }


  render() {
    return (
      <div>
        <div>
          <h2>Step 3: Checkout</h2>
          <ul>
            <li>{this.props.order.name}</li>
            <li>{this.props.order.streetaddress}</li>
            <li>{this.props.order.city}, {this.props.order.zip}</li>
          </ul>
          <h3>{this.props.order.deliveryMethod}</h3>
        </div>

        <table>
          <thead>
            <th>Name</th>
            <th>Cost</th>
          </thead>
          <tbody>
            {this.props.cart.map(pizza =>
              <tr>
                <td>{pizza.name}</td>
                <td>{pizza.price}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

const reduxState = (reduxState) => {
  return {
    cart: reduxState.cartReducer,
    order: reduxState.orderReducer

  }
}
export default connect(reduxState)(Checkout)