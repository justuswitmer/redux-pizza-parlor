import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { connect } from 'react-redux';


class PizzaList extends Component {
  render() {
    return (
      <div className="pizzaListDiv">
        {this.props.pizza.map(pizza =>
          <PizzaListItem
            pizza={pizza}
          />
        )}
      </div>
    ) // end return
  } // end render
} // end PizzaList

const mapStateToProps = (reduxState) => {
  return {
    pizza: reduxState.pizzaReducer
  }
}

export default connect(mapStateToProps)(PizzaList);