import React, { Component } from "react";
import { connect } from "react-redux";
import './Admin.css';
import axios from "axios";

let date = new Date()
// date.toLocaleDateString()
// date.toLocaleTimeString()

class Admin extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(order =>
              <tr>
                <td>{order.customer_name}</td>
                <td>{Date(order.time)}</td>
                <td>{order.type}</td>
                <td>${order.total}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

}

const mapStateToProps = (reduxStore) => ({
  orders: reduxStore.orderReducer
});

export default connect(mapStateToProps)(Admin);