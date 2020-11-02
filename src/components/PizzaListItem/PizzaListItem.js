import React, { Component } from 'react';
import { connect } from "react-redux";


class PizzaListItem extends Component {

  state = {
    isInCart: false
  }

  onAdd = () => {
    console.log('onAdd button in pizzalistItem', this.props.pizza);

    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: this.props.pizza
    });
    this.setState = ({
      isInCart: !this.state.isInCart
    });
  }

  onDelete = (pizzaId) => {
    console.log('onDelete button in pizzalistItem, removing pizza with id', pizzaId);
    let cartDeleted = this.props.cart.filter(cartItem => cartItem.id !== pizzaId);

    this.props.dispatch({
      type: "NEW_CART",
      payload: cartDeleted
    });
    this.setState = ({
      isInCart: !this.state.isInCart
    });
  }



  render() {

    return (
      <>
        <div className="pizzaDiv" key={this.props.pizza.id} width="250">
          <img src={`${this.props.pizza.image_path}`} alt="peeza" width="200" />
          <h3>{this.props.pizza.name}</h3>
          <p>{this.props.pizza.description}</p>
          <h4>{this.props.pizza.price}</h4>
          <button onClick={this.onAdd}>Add Pizza</button>
          <button onClick={() => this.onDelete(this.props.pizza.id)}>Remove Pizza</button>

        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    cart: reduxState.cartReducer
  }
}

export default connect(mapStateToProps)(PizzaListItem);