import React, { Component } from 'react';
import { connect } from "react-redux";


class PizzaListItem extends Component {

  onAdd = () => {
    console.log('onAdd button in pizzalistItem', this.props.pizza);
    
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: this.props.pizza
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
        </div>
      </>
    );
  }
}

export default connect()(PizzaListItem);