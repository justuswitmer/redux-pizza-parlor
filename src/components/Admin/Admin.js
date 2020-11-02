import React, { Component } from "react";
import { connect } from "react-redux";
import './Admin.css';
import axios from "axios";

class Admin extends Component {

  getOrderDetails = () => {
    console.log('in getOrderDetails');
    axios({
      method: "GET",
      url: "/api/admin",
    })
      .then((response) => {
        console.log("GET order response", response);
        this.props.dispatch({
          type: "GET_ORDER",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.error("GET error", err);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time and Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chris</td>
              <td>4/5/2020 at 4:45pm</td>
              <td>Pickup</td>
              <td>$39.79</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToProps)(Admin);